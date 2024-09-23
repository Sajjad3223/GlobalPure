import type {BaseDto} from "~/models/baseDto";
import type {RoleDto} from "~/models/role/roleQueries";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {BaseFilterParams} from "~/models/baseFilterParams";

export interface UserDto extends BaseDto {
    firstName: string;
    lastName: string;
    fullName: string;
    nationalId: string;
    phoneNumber: string;
    email: string;
    avatar: string;
    addresses: AddressDto[];
    roles: RoleDto[];
    wallets: WalletDto[];
    walletCash:number;
    GPClubScore:number;
    isPhoneConfirmed:boolean;
    isEmailConfirmed:boolean;
}

export interface AddressDto extends BaseDto {
    receiverFirstName: string;
    receiverLastName: string;
    receiverPhoneNumber: string;
    state: string;
    city: string;
    street: string;
    postCode: string;
    plaque: number;
    unit: number;
    isActiveAddress: boolean;
}

export interface WalletDto extends BaseDto {
    userId: number;
    fullName: string;
    price: number;
    description: string;
    isFinally: boolean;
    finallyDate: Date;
    walletType: EWalletType;
    refCode?: string;
}

export interface WalletFilterParams extends BaseFilterParams{
    walletType?: number | null | undefined;
    userId?: number | null | undefined;
    minPrice?: number | null | undefined;
    maxPrice?: number | null | undefined;
    justFinally?: boolean | null | undefined;
    fromDate?: string | null | undefined;
    toDate?: string | null | undefined;
    search?: string | null | undefined;
}
export interface WalletFilterResult extends BaseFilterResult<WalletDto>{
    lastMonthTransactions:number;
    monthTransactions:number;
    todayTransactions:number;
    totalTransactions:number;
}

export enum EWalletType {
    Deposit,
    Withdraw
}