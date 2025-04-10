import type { UnionToTuple } from "type-fest";

type OrderStatus =
  | "InCart"
  | "Pending"
  | "Confirmed"
  | "Preparing"
  | "ReadyForPickup"
  | "InDelivery"
  | "Delivered"
  | "Cancelled";

/**
 * Fails with TSGO on 10 April 2025 (tested at commit https://github.com/microsoft/typescript-go/commit/a88fef77f5a7663513a45ca0b1a431102638fbd2)
 *
 * It does not fail with TypeScript 5.8.3
 */
export const thisFails = [
  "InCart",
  "Pending",
  "Confirmed",
  "Preparing",
  "ReadyForPickup",
  "InDelivery",
  "Delivered",
  "Cancelled",
] as const satisfies UnionToTuple<OrderStatus>;
