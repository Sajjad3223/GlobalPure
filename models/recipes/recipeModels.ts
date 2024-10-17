import type {BaseDto} from "~/models/baseDto";
import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";

export interface RecipeFilterData extends BaseDto{
    title: string;
    slug: string;
    descriptiveTitle: string;
    shortDescription: string;
    imageName: string;
    views: number;
}

export interface RecipeFilterParams extends BaseFilterParams{
    categoryId?:number | undefined | null;
}

export interface RecipeFilterResult extends BaseFilterResult<RecipeFilterData>{}

export interface RecipeCategory extends BaseDto{
    title:string;
    slug:string;
    parentId?:number | null;
    children:RecipeCategory[];
}
export interface RecipeCategoryFilterResult extends BaseFilterResult<RecipeCategory>{}

export interface RecipeDto extends BaseDto{
    title: string
    slug: string
    descriptiveTitle: string
    content: string
    imageName: string
    preparationTime: number
    cookTime: number
    readyTime: number
    servings: number
    cuisine: Cuisine
    categoryId: number
    difficultyLevel: Difficulty
    views: number
    recipeCategory: RecipeCategory
}

export enum Cuisine
{
    American,
    Italian,
    Iranian,
}

export enum Difficulty{
    Easy,
    Normal,
    Hard
}