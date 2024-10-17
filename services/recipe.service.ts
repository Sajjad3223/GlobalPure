import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {
    RecipeCategoryFilterResult,
    RecipeDto,
    RecipeFilterParams,
    RecipeFilterResult
} from "~/models/recipes/recipeModels";
import type {BaseFilterParams} from "~/models/baseFilterParams";


export const GetAllRecipeCategories = (params:BaseFilterParams):Promise<ApiResponse<RecipeCategoryFilterResult>> =>{
    return FetchApi(`/recipe/categories`,{
        method:'GET',
        params:params
    });
}
export const GetAllRecipes = (params:RecipeFilterParams):Promise<ApiResponse<RecipeFilterResult>> =>{
    return FetchApi(`/recipe`,{
        method:'GET',
        params:params
    });
}

export const GetRecipeBySlug = (slug:string):Promise<ApiResponse<RecipeDto>> =>{
    return FetchApi(`/recipe/${slug}`,{
        method:'GET'
    });
}