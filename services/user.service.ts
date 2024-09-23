import type {ChangePasswordCommand, EditUserCommand, LoginCommand, RegisterCommand} from "~/models/users/userCommands";
import type {ApiResponse} from "~/models/apiResponse";
import {FetchApi} from "~/utilities/CustomApiFetch";

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
export const GenerateEmailCode = ():Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/generate-emailCode`,{
        method:'PUT'
    });
}
export const ConfirmEmail = (code:string):Promise<ApiResponse<undefined>> =>{
    return FetchApi(`/user/email`,{
        method:'PUT',
        body:{
            code
        }
    });
}