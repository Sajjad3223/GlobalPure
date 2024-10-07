import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    CategoryFilterResult,
    ProductDto,
    ProductFilterParams,
    ProductFilterResult
} from "~/models/products/productData";
import type {BaseFilterParams} from "~/models/baseFilterParams";


export const GetAllCategories = (params:BaseFilterParams):Promise<ApiResponse<CategoryFilterResult>> =>{
    return FetchApi(`/product/categories`,{
        method:'GET',
        params:params
    });
}
export const GetAllProducts = (params:ProductFilterParams):Promise<ApiResponse<ProductFilterResult>> =>{
    return FetchApi(`/product`,{
        method:'GET',
        params:params
    });
}

export const GetProductBySlug = (slug:string):Promise<ApiResponse<ProductDto>> =>{
    return FetchApi(`/product/${slug}`,{
        method:'GET'
    });
}