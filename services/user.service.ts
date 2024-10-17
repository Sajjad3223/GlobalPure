import type {
    ChangePasswordCommand,
    EditUserCommand,
    LoginCommand,
    RegisterCommand,
    ResetPasswordCommand
} from "~/models/users/userCommands";
import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";
import type {UserDto, WishlistDto} from "~/models/users/userDto";

export const GetCurrentUser = ():Promise<ApiResponse<UserDto | null>> =>{
    return FetchApi(`/user/current`,{
        method:'GET',
    });
}
export const RegisterUser = (command:RegisterCommand):Promise<ApiResponse<string>> =>{
    return FetchApi(`/user`,{
        method:'POST',
        body:command
    });
}
export const LoginUser = (command:LoginCommand):Promise<ApiResponse<string>> =>{
    return FetchApi(`/user/login`,{
        method:'GET',
        params:command
    });
}
export const EditInformation = (command:EditUserCommand):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user`,{
        method:'PUT',
        body:command
    });
}
export const ChangePassword = (command:ChangePasswordCommand):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/password`,{
        method:'PUT',
        body:command
    });
}
export const ForgetPassword = (email:string):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/forget-password`,{
        method:'PUT',
        body:{
            email
        }
    });
}
export const ConfirmForgetPassword = (code:string,email:string):Promise<ApiResponse<string>> =>{
    return FetchApi(`/user/confirm-forget-password`,{
        method:'PUT',
        body:{
            code,
            email
        }
    });
}
export const ResetUserPassword = (command:ResetPasswordCommand):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/reset-password`,{
        method:'PUT',
        body:command
    });
}
export const GenerateEmailCode = ():Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/generate-emailCode`,{
        method:'PUT'
    });
}
export const ConfirmEmail = (code:string):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/confirm-email`,{
        method:'PUT',
        body:{
            code
        }
    });
}

export const GetWishlist = ():Promise<ApiResponse<WishlistDto[]>> => {
    return FetchApi(`/user/wishlist`,{
        method:'GET'
    });
}
export const ToggleWishlist = (productId:number)=>{
    return FetchApi(`/user/wishlist/${productId}`,{
        method:'POST',
    });
}