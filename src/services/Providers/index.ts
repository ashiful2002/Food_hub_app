"use server";

import { cookies } from "next/headers";

export const getProviders = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/provider`, {
      next: {
        revalidate: 20,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch meals");
    }
    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export const getProvidersAllMeals = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/provider/meals`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
      }
    );
    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to fetch meals");
    }
    const result = await res.json();
    return result;
  } catch (error: any) {
    // throw new Error(error.message);
    console.log(error);
  }
};

// get a single provider
export const getSingleProvider = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/provider/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch meals");
    }
    const result = await res.json();
    return result;
  } catch (error: any) {
    console.log(error);
  }
};

export const updateMeal = async (mealId: string, payload: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/provider/meals/${mealId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
        body: JSON.stringify(payload),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to update meal");
    }
    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteAMealByProvider = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/provider/meals/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to Delete meal");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// providers all orders

export const getProvidersAllOrders = async (params?: Record<string, any>) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const query = params
    ? new URLSearchParams(
        Object.entries(params).reduce(
          (acc: Record<string, string>, [key, value]) => {
            if (value !== undefined) {
              acc[key] = String(value);
            }
            return acc;
          },
          {}
        )
      ).toString()
    : "";

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/provider/orders?${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
        next: {
          revalidate: 20,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch orders by this provider");
    }
    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

/////////////////////////////////////////
export const updateOrderStatus = async (mealId: string, payload: any) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/provider/orders/${mealId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token!,
        },
        body: JSON.stringify(payload),
      }
    );
    if (!res.ok) {
      throw new Error("Failed to update meal");
    }
    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
