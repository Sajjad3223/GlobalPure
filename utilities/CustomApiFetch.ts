import {$fetch, type FetchError, type FetchOptions} from "ofetch";
import type {ApiResponse} from "~/models/apiResponse";
import {ApiStatusCode} from "~/models/metaData";
import {useAuthStore} from "~/stores/auth.store";
import {BASE_URL} from "~/utilities/api.config";

export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {},
): Promise<ApiResponse<T>>
{
    config = {
        baseURL:BASE_URL,
        retry:0,
        credentials:'include',
        ...config
    };

    const authStore = useAuthStore();
    if(!config.headers)
    {
        config.headers = {};
    }
    if(authStore && authStore.isLoggedIn)
    {
        const token = authStore.getAccessToken();
        //@ts-ignore
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    //@ts-ignore
    return $fetch<ApiResponse<T>>(url,config)
        .then(res=>{
            return res;
        })
        .catch((e:FetchError) =>{
            return {
                data:undefined,
                isSuccess:false,
                metaData:{
                    message: e.response?._data?.MetaData?.Message ?? "مشکلی در عملیات رخ داده است!",
                    appStatusCode: e.response?._data?.MetaData?.AppStatusCode ?? ApiStatusCode.ServerError,
                },
            }
        });
}