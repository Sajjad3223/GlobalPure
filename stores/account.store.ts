import type {UserDto} from "~/models/users/userDto";
import {ApiStatusCode} from "~/models/metaData";
import {GetCurrentUser} from "~/services/user.service";

export const useAccountStore = defineStore('account',()=> {
    const currentUser: Ref<UserDto | null> = ref(null);
    const initLoading = ref(true);

    const initData = async () => {
        initLoading.value = true;

        const userData = await GetCurrentUser();

        if (userData.isSuccess) {
            currentUser.value = userData.data!;
        } else if ( userData.metaData.appStatusCode == ApiStatusCode.UnAuthorize) {
            const cookie = useCookie("c-access-token");
            cookie.value = null;
            currentUser.value = null;
        }

        initLoading.value = false;
    };

    return{
        initData,
        currentUser,
        initLoading
    }
})