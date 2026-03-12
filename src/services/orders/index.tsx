"use server";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export const getOrders = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  try {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "GET",
      headers: {
        Authorization: token!,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
  }
};

export const createOrder = async (payload: any) => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  try {
    const res = await fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token!,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
  }
};

export const getSingleOrder = async (id: string) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  try {
    const res = await fetch(`${BASE_URL}/orders/${id}`, {
      method: "GET",
      headers: {
        Authorization: token!,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    const result = await res.json();
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getOrdersForAdmin = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  try {
    const res = await fetch(`${BASE_URL}/admin/orders`, {
      method: "GET",
      headers: {
        Authorization: token!,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
  }
};