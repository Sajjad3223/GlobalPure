import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {SiteData} from "~/models/site/siteData";

export const GetSiteSettings = ():Promise<ApiResponse<SiteData>> =>{
    return FetchApi(`/site`,{
        method:'GET'
    });
}