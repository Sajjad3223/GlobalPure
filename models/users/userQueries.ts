import type {BaseFilterParams} from "~/models/baseFilterParams";
import type {BaseFilterResult} from "~/models/baseFilterResult";
import type {BaseDto} from "~/models/baseDto";

export interface UserFilterParams extends BaseFilterParams{
    search?: string;
}

export interface UserFilterData extends BaseDto {
    firstName: string;
    lastName: string;
    fullName: string;
    nationalId?: string;
    phoneNumber: string;
    email?: string;
    avatar?: string;
    isPhoneConfirmed:boolean;
    isEmailConfirmed:boolean;
}

export interface UserFilterResult extends BaseFilterResult<UserFilterData>{}