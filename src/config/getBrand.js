// Server-only helper. Do NOT import this from a "use client" component.
import { headers } from "next/headers";
import { getBrandFromHost } from "@/config/brands";

export function getBrand() {
  return getBrandFromHost(headers().get("host"));
}
