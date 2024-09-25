import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {SubscribeNewsletterCommand} from "~/models/newsletter/subscribeCommand";


export const SubscribeNewsletter = (command:SubscribeNewsletterCommand):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/newsletter`,{
        method:'POST',
        body:command
    });
}