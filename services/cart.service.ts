import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    CategoryFilterResult,
    ProductDto,
    ProductFilterParams,
    ProductFilterResult
} from "~/models/products/productData";
import type {AddToCartCommand, Order, SetOrderDiscountCommand} from "~/models/cart/orderData";


export const GetPendingOrder = ():Promise<ApiResponse<Order>> =>{
    return FetchApi(`/cart`,{
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