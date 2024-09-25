import type {EWalletType} from "~/models/users/userDto";

export interface RegisterCommand {
    firstName?: string | null;
    email: string;
    password: string;
}

export interface LoginCommand {
    email: string;
    password: string;
}

export interface EditUserCommand {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber:string;
}

export interface ChangePasswordCommand {
    oldPassword: string;
    newPassword: string;
}

export interface ResetPasswordCommand {
    resetToken: string;
    newPassword: string;
}

export interface AddUserAddressCommand {
    receiverFirstName: string
    receiverLastName: string
    receiverPhoneNumber: string
    state: string
    city: string
    street: string
    postCode: string
    plaque: number
    unit: number
}
export interface EditUserAddressCommand {
    addressId:number;
    receiverFirstName: string;
    receiverLastName: string;
    receiverPhoneNumber: string;
    state: string;
    city: string;
    street: string;
    postCode: string;
    plaque: number;
    unit: number;
}