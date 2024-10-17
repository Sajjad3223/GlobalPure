import type {BaseDto} from "~/models/baseDto";
import {type Price, PriceUnit} from "~/models/commonTypes";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface ProductFilterData extends BaseDto{
    categoryId: number
    title: string
    slug: string
    serial: string
    quantity: number
    amazonPrice: Price
    mainImage: string
    description: string
    prices: ProductPrice[]
}

export interface ProductFilterParams extends BaseFilterParams{
    minPrice?: number | undefined | null;
    maxPrice?: number | undefined | null;
    unit?:PriceUnit | undefined | null;
    sortBy?: SortBy | undefined | null;
    sortType?: SortType | undefined | null;
}
export enum SortBy{
    Date,
    Price
}
export enum SortType{
    Ascending,
    Descending
}

export interface ProductFilterResult extends BaseFilterResult<ProductFilterData>{}

export interface ProductDto extends BaseDto{
    categoryId: number
    title: string
    slug: string
    serial: string
    quantity: number
    amazonPrice: Price
    mainImage: string
    description: string
    category: Category
    isInWishlist:boolean
    prices: ProductPrice[]
    features: ProductFeature[]
    images: ProductImage[]
}

export interface Category extends BaseDto{
    title: string
    slug: string
    image?: string | null
    parentId?:number | null
}
export interface CategoryFilterResult extends BaseFilterResult<Category>{}

export interface ProductPrice extends BaseDto{
    productId: number
    price: Price
}

export interface ProductFeature extends BaseDto{
    productId: number
    key: string
    value: string
}

export interface ProductImage extends BaseDto{
    productId: number
    imageName: string
}
