import type {MetaData} from "~/models/metaData";
import {useToastStore} from "~/stores/toast.store";

export class Toast {
    constructor(
        public message: string,
        public type: ToastType,
        public duration: number = 3000
    ) {}

    public static Error(message: string, duration: number = 3000) {
        return new Toast(message, ToastType.error, duration);
    }
}
export enum ToastType {
    info = "info",
    success = "success",
    warning = "warning",
    error = "error",
}
export const useToast = () => {
    const showToast = (
        message: string="عملیات با موفقیت انجام شد",
        type: ToastType = ToastType.success,
        duration: number = 3000,
        toast:boolean = false,
        confirmedFunc?:Function | null
    ) => {
        /*useToastStore().addToastMessage({
            id:0,
            message,
            type:type,
            duration,
            func:confirmedFunc
        });*/
        alert(message);
        return ;
    };
    const showError = (
        metaData: MetaData,
        toast:boolean = false
    ) => {
        alert(metaData.message);
    };

    return { showToast,showError };
};