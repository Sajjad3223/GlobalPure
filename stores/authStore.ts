export const useAuthStore = defineStore('auth',()=>{
    const isLoggedIn = ref(false);

    const logIn = ()=>{
        isLoggedIn.value = true;
    }
    const logOut = ()=>{
        isLoggedIn.value = false;
    }

    return {
        isLoggedIn,
        logIn,
        logOut
    }
})