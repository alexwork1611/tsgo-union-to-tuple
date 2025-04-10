import type { UnionToTuple } from 'type-fest'

type OrderStatus = 'InCart' |
    'Pending' |
    'Confirmed' |
    'Preparing' |
    'ReadyForPickup' |
    'InDelivery' |
    'Delivered' |
    'Cancelled'

export const willFailWithTsgo10April2025 = [
    'InCart',
    'Pending',
    'Confirmed',
    'Preparing',
    'ReadyForPickup',
    'InDelivery',
    'Delivered',
    'Cancelled',
] as const satisfies UnionToTuple<OrderStatus>
