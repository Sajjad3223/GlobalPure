import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";


export const SendContactForm = (command:FormData):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/contact`,{
        method:'POST',
        body:command
    });
}