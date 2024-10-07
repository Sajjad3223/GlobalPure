import type {BaseDto} from "~/models/baseDto";
import type {Price} from "~/models/commonTypes";

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