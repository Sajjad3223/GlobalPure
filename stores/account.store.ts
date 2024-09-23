import type {UserDto} from "~/models/users/userDto";
import {ApiStatusCode} from "~/models/metaData";
import {GetCurrentUser} from "~/services/user.service";
import {GetUnseenNotificationsCount} from "~/services/notification.service";
import type {FavoriteDto} from "~/models/favorite/favoriteDto";
import {GetFavorites, GetFavoritesCount} from "~/services/favorite.service";
import type {EPostType} from "~/models/EPostType";

export const useAccountStore = defineStore('account',()=> {
    const currentUser: Ref<UserDto | null> = ref(null);
    const initLoading = ref(true);
    const unseenNotifs: Ref<number | null> = ref(0);
    const myFavorites:Ref<FavoriteDto[]> = ref([]);
    const myFavoritesCount:Ref<number> = ref(0);

    const isAdmin = computed(()=>{
        return currentUser.value?.roles.some(r=>r.title === 'ادمین');
    })
    const isFavorite = (postId:number,postType:EPostType)=>{
        if(myFavorites.value.length <= 0) return false;
        return myFavorites.value.some(f=>f.postId == postId && postType == postType);
    }

    const hasActiveAddress = computed(()=>{
        return currentUser.value?.addresses.some(a=>a.isActiveAddress);
    })

    const getActiveAddress = computed(()=>{
        if(currentUser.value == null) return null;
        return currentUser.value?.addresses.find(a=>a.isActiveAddress);
    })

    const initData = async () => {
        initLoading.value = true;

        const userData = await GetCurrentUser();
        if (userData.isSuccess) {
            currentUser.value = userData.data!;
            const notifsResult = await GetUnseenNotificationsCount();
            if(notifsResult.isSuccess){
                unseenNotifs.value = notifsResult.data ?? 0;
            }
            const favResult = await GetFavorites({take:50,pageId:1});
            if(favResult.isSuccess){
                myFavorites.value = favResult.data ?? [];
            }
            const favCountResult = await GetFavoritesCount();
            if(favCountResult.isSuccess){
                myFavoritesCount.value = favCountResult.data ?? 0;
            }
            if(userData.data?.wallets == null || userData.data.wallets.length <= 0)
                currentUser.value.wallets = [];

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
        initLoading,
        isAdmin,
        unseenNotifs,
        myFavorites,
        myFavoritesCount,
        isFavorite,
        hasActiveAddress,
        getActiveAddress
    }
})