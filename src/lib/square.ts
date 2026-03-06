const SQUARE_BASE = "https://connect.squareup.com/v2";

function headers() {
  return {
    Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
    "Content-Type": "application/json",
    "Square-Version": "2025-01-23",
  };
}

export async function squareFetch(path: string, opts?: RequestInit) {
  const res = await fetch(`${SQUARE_BASE}${path}`, {
    ...opts,
    headers: { ...headers(), ...opts?.headers },
  });
  return res.json();
}

export interface ServiceVariation {
  id: string;
  serviceName: string;
  variationName: string;
  priceCents: number | null;
  durationMinutes: number;
}

export interface AddOn {
  id: string;
  name: string;
  variationName: string;
  priceCents: number | null;
  durationMinutes: number;
}

const ADD_ON_NAMES = ["PET HAIR REMOVAL (ADD ON)", "ODOR REMOVAL (ADD ON)", "UPHOLSTERY SHAMPOO", "TRIM RESTORATION"];

export async function getBookableServices(): Promise<{ services: ServiceVariation[]; addOns: AddOn[] }> {
  const data = await squareFetch("/catalog/search", {
    method: "POST",
    body: JSON.stringify({
      object_types: ["ITEM"],
      query: {
        exact_query: {
          attribute_name: "product_type",
          attribute_value: "APPOINTMENTS_SERVICE",
        },
      },
    }),
  });

  const items = data.objects || [];
  const services: ServiceVariation[] = [];
  const addOns: AddOn[] = [];

  const serviceOrder = [
    "EXTERIOR WASH",
    "INTERIOR DETAIL",
    "INTERIOR & EXTERIOR COMBO",
    "WASH CLAY & SEAL",
    "PAINT CORRECTION",
    "CERAMIC COATING",
  ];

  items.sort((a: { item_data?: { name?: string } }, b: { item_data?: { name?: string } }) => {
    const aIdx = serviceOrder.indexOf(a.item_data?.name || "");
    const bIdx = serviceOrder.indexOf(b.item_data?.name || "");
    return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
  });

  for (const item of items) {
    const name = item.item_data?.name || "";
    const isAddOn = ADD_ON_NAMES.includes(name);

    for (const v of item.item_data?.variations || []) {
      const price = v.item_variation_data?.price_money;
      const entry = {
        id: v.id,
        priceCents: price ? price.amount : null,
        durationMinutes: Math.round((v.item_variation_data?.service_duration || 0) / 60000),
      };

      if (isAddOn) {
        addOns.push({
          ...entry,
          name: name.replace(" (ADD ON)", ""),
          variationName: v.item_variation_data?.name || "",
        });
      } else {
        services.push({
          ...entry,
          serviceName: name,
          variationName: v.item_variation_data?.name || "",
        });
      }
    }
  }

  return { services, addOns };
}

export async function searchAvailability(serviceVariationId: string, startDate: string, endDate: string) {
  const locationId = process.env.SQUARE_LOCATION_ID;
  const data = await squareFetch("/bookings/availability/search", {
    method: "POST",
    body: JSON.stringify({
      query: {
        filter: {
          location_id: locationId,
          start_at_range: {
            start_at: `${startDate}T00:00:00Z`,
            end_at: `${endDate}T23:59:59Z`,
          },
          segment_filters: [
            {
              service_variation_id: serviceVariationId,
            },
          ],
        },
      },
    }),
  });

  return data.availabilities || [];
}

export async function createBooking(params: {
  serviceVariationId: string;
  teamMemberId: string;
  startAt: string;
  customerNote?: string;
  customerFirstName: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
}) {
  const locationId = process.env.SQUARE_LOCATION_ID;

  const customerData = await squareFetch("/customers/search", {
    method: "POST",
    body: JSON.stringify({
      query: {
        filter: {
          email_address: { exact: params.customerEmail },
        },
      },
    }),
  });

  let customerId: string;
  if (customerData.customers?.length > 0) {
    customerId = customerData.customers[0].id;
  } else {
    const newCustomer = await squareFetch("/customers", {
      method: "POST",
      body: JSON.stringify({
        given_name: params.customerFirstName,
        family_name: params.customerLastName,
        email_address: params.customerEmail,
        phone_number: params.customerPhone,
      }),
    });
    customerId = newCustomer.customer?.id;
  }

  const booking = await squareFetch("/bookings", {
    method: "POST",
    body: JSON.stringify({
      booking: {
        location_id: locationId,
        customer_id: customerId,
        customer_note: params.customerNote || "",
        start_at: params.startAt,
        appointment_segments: [
          {
            service_variation_id: params.serviceVariationId,
            service_variation_version: 0,
            team_member_id: params.teamMemberId,
          },
        ],
      },
    }),
  });

  return booking;
}
