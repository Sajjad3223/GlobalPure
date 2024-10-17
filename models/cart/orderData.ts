import type {BaseDto} from "~/models/baseDto";
import {type Price, PriceUnit} from "~/models/commonTypes";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface AddToCartCommand{
    productId:number;
    count:number;
}

export interface Order extends BaseDto{
    userId: number
    address: Address
    discount: Discount
    status: OrderStatus
    finallyDate?: Date | null
    fullName: string
    transmissionPrice: Price
    orderItems: OrderItem[]
}
export enum OrderStatus{
    Pending,
    Paid,
    Delivered,
    Canceled,
}

export interface OrderFilterParams extends BaseFilterParams{
    orderStatus?:OrderStatus | null | undefined;
}
export interface OrderFilterResult extends BaseFilterResult<Order>{}

export interface Address {
    country: string
    city: string
    company: string
    apartment: string
    completeAddress: string
    postalCode: string
    fullName: string
    phoneNumber: string
}

export interface Discount {
    code: string
    amount: number
}
export interface SetOrderDiscountCommand {
    code: string;
    phoneNumber:string;
}
export interface SendTetherRequestCommand {
    txId: string;
    orderId:number;
}
export interface CompleteOrderDataCommand {
    email: string
    orderId: number | undefined
    country: string
    city: string
    company?: string | null;
    apartment?: string | null;
    completeAddress: string
    postalCode: string
    firstName: string
    lastName: string
    phoneNumber: string
    paymentType: PaymentType
    trackingPost: TrackingPost
    remember: boolean;
    currency:PriceUnit;
    orderItems:OrderItemData[]
}
export interface OrderItemData{
    data:ProductData;
    count:number;
}
export enum PaymentType{
    CreditCard,
    PayPal,
    Tether
}
export enum TrackingPost{
    DHL,
    UPS,
    FedEx
}

export interface OrderItem extends BaseDto{
    orderId: number
    productData: ProductData
    quantity: number
    prices: Price[]
}

export interface ProductData {
    id: number
    title: string
    slug: string
    image: string
}
export interface TetherPaymentDto extends BaseDto{
    orderId:number
    userId:number
    txID:string
    status:TetherPaymentStatus
    trackingCode:string
    modifiedAt:Date
    order?:Order | null
}

export enum TetherPaymentStatus{
    Pending,
    Confirmed,
    Rejected
}