import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    AddToCartCommand, CompleteOrderDataCommand,
    Order,
    OrderFilterParams,
    OrderFilterResult, SendTetherRequestCommand,
    SetOrderDiscountCommand, TetherPaymentDto
} from "~/models/cart/orderData";


export const GetPendingOrder = ():Promise<ApiResponse<Order>> =>{
    return FetchApi(`/cart`,{
        method:'GET',
    });
}
export const GetUserOrders = (filterParams:OrderFilterParams):Promise<ApiResponse<OrderFilterResult>> =>{
    return FetchApi(`/cart/user`,{
        method:'GET',
        params:filterParams
    });
}
export const GetOrder = (orderId:number):Promise<ApiResponse<Order>> =>{
    return FetchApi(`/cart/${orderId}`,{
        method:'GET',
    });
}
export const AddToCart = (command:AddToCartCommand):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart`,{
        method:'POST',
        body:command
    });
}

export const IncreaseCount = (itemId:number):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart/increase/${itemId}`,{
        method:'PUT'
    });
}
export const DecreaseCount = (itemId:number):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart/decrease/${itemId}`,{
        method:'PUT'
    });
}
export const SetDiscount = (command:SetOrderDiscountCommand):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart/discount`,{
        method:'PUT',
        body:command
    });
}
export const RemoveDiscount = ():Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart/discount`,{
        method:'DELETE'
    });
}
export const DeleteItem = (itemId:number):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart/${itemId}`,{
        method:'DELETE'
    });
}
export const DeleteAllItems = ():Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/cart/delete-all`,{
        method:'DELETE'
    });
}

export const CompleteOrderData = (command:CompleteOrderDataCommand):Promise<ApiResponse<number>> =>{
    return FetchApi(`/cart/pay`,{
        method:'POST',
        body:command
    });
}

export const SendTetherPaymentRequest = (command:SendTetherRequestCommand):Promise<ApiResponse<string>> => {
    return FetchApi(`/cart/tether-request`,{
        method:'POST',
        body:command
    });
}

export const GetPaymentWithCode = (code:string):Promise<ApiResponse<TetherPaymentDto>> => {
    return FetchApi(`/cart/track-request/${code}`,{
        method:'GET'
    });
}