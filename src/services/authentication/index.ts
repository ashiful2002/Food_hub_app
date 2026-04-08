"use server";
import { User } from "@/types";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";

interface DecodedToken extends JwtPayload {
  sub: string;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  email: string;
  name?: string;
  avatar?: string | null;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  const cookieStore = await cookies();

  let res: Response;

  // Separate network errors from API errors
  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error("Unable to reach the server. Check your connection.");
  }

  // Parse body once — safe for both ok and error responses
  const body = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(
      res.status === 500
        ? "Invalid email or password."
        : body.message ?? "Login failed. Please try again."
    );
  }

  if (!body.success) {
    throw new Error(body.message ?? "Login failed. Please try again.");
  }

  cookieStore.set("token", body.data.token, {
    httpOnly: true, // JS can't read it — XSS protection
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 1 week — adjust to your token's expiry
  });
};

// register new user
export const registerUser = async (data: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API}/auth/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Signup failed");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUser = async (): Promise<User | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  const decoded = jwtDecode<DecodedToken>(token);

  return {
    id: decoded.sub,
    name: decoded.name ?? "User",
    email: decoded.email,
    avatar: decoded.avatar ?? null,
    role: decoded.role,
  };
};
// log out user
export const UserLogOut = async () => {
  const storeCookie = await cookies();
  storeCookie.delete("token");
};
