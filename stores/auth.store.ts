import { defineStore } from "pinia";
import type {LoginResultDto} from "~/models/users/loginResultDto";


export const useAuthStore = defineStore("auth",()=>{
    const isAuthModalOpen = ref(false);
    const callBackFunctionAfterLogin: Ref<Function | null> = ref(null);
    const authModalTitle = ref('ثبت نام');
    const currentStep = ref('login');

    const tempPhoneNumber:Ref<string | null> = ref(null);

    const isLoggedIn = computed(() => {
        const cookie = getAccessToken();
        return cookie != null && cookie != "" && cookie != undefined;
    });
    const getAccessToken = () => {
        const cookie = useCookie("c-access-token", {
            watch: false,
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        return cookie.value;
    };
    const setToken = async (tokenResult: LoginResultDto) => {
        const cookie = useCookie("c-access-token", {
            expires: new Date(new Date().setDate(new Date().getDate() + 30)),
        });
        cookie.value = tokenResult.token;
        setTimeout(() => {
            if (
                callBackFunctionAfterLogin.value != null &&
                callBackFunctionAfterLogin.value != undefined
            ) {
                callBackFunctionAfterLogin.value!();
            }
        }, 300);
        await router.push('/profile');
    };
    const router = useRouter();
    const logOut = async () => {
        const cookie = useCookie("c-access-token");
        cookie.value = null;
        await router.push('/');
        location.reload();
    };

    const changeStep = (
        step:
            | "login"
            | "register"
            | "forgotPassword"
            | "confirmForgetPassword"
            | "changePasswordForgetPassword"
    ) => {
        currentStep.value = step;
        switch (step){
            case "register": authModalTitle.value = 'ثبت نام'; break;
            case "login": authModalTitle.value = 'ورود'; break;
            case "forgotPassword": authModalTitle.value = 'فراموشی رمز عبور'; break;
            case "confirmForgetPassword": authModalTitle.value = 'تایید کد ارسال شده'; break;
            case "changePasswordForgetPassword": authModalTitle.value = 'تغییر رمز عبور'; break;
        }
    };

    const setTempPhoneNumber = (
        phoneNumber:string
    ) => {
        tempPhoneNumber.value = phoneNumber;
    };

    return {
        isAuthModalOpen,
        isLoggedIn,
        getAccessToken,
        setToken,
        logOut,
        changeStep,
        currentStep,
        authModalTitle,
        tempPhoneNumber,
        setTempPhoneNumber
    };
})