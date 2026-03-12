"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getCategories = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`, {
    next: {
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export async function createCategory(data: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token!,
    },
    body: JSON.stringify(data),
  });
  // console.log("Sending data:", data);
  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to create category");
  }

  revalidateTag("categories", {});

  return result;
}

export async function updateCategory(id: string, data: any) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token!,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to update category");
  }

  revalidateTag("categories", {});
}

export async function deleteCategory(id: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/categories/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token!,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to delete category");
  }

  revalidateTag("categories", {});
}
