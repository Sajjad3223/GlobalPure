<template>
  <div class="m-0 p-0 flex items-center w-screen h-screen">
    <Head>
      <Title>Sign Up | Log In</Title>
    </Head>
    <div class="flex-1 h-[90%] md:h-[80%] 2xl:h-[90%] flex items-center justify-start">
      <div class="w-5/6 md:w-1/2 h-full mx-auto flex flex-col items-center justify-start gap-5 md:gap-8">
        <NuxtLink to="/" class="flex md:hidden 2xl:flex flex-col items-center gap-1">
          <h1 class="font-modern text-4xl md:text-5xl">Global Pure</h1>
          <span class="hidden md:block text-lg md:text-2xl">Trading</span>
        </NuxtLink>
        <div class="flex flex-col w-full gap-4">
          <div class="flex items-center justify-around">
            <button :class="['transition-opacity duration-300',{'opacity-50':authStep == 'login'}]" @click="authStep = 'signup' ">Sign up</button>
            <button :class="['transition-opacity duration-300',{'opacity-50':authStep == 'signup'}]" @click="authStep = 'login' ">Log in</button>
          </div>
          <div class="relative flex items-center w-full h-px bg-[#453F29]/10">
            <div :class="['absolute w-3 h-3 bg-[#504A33] rotate-45 transition-all duration-300',
            authStep == 'signup' ? 'left-1/4' : 'left-3/4']"></div>
          </div>
        </div>
        <form @submit.prevent="SignUp" class="flex flex-col w-full gap-6" v-if="authStep == 'signup'">
          <BaseGInput name="name" label="Name" type="text" placeholder="Enter Your Name" required v-model="signupCommand.firstName" />
          <BaseGInput name="email" label="Email" type="email" placeholder="your@gmail.com" required v-model="signupCommand.email" />
          <BaseGInput name="password" label="Password" type="password" placeholder="Create a password" required v-model="signupCommand.password" />
          <BaseGButton type="submit">SIGN UP</BaseGButton>
        </form>
        <form @submit.prevent="Login" class="flex flex-col w-full gap-6" v-else>
          <BaseGInput name="email" label="Email" type="email" placeholder="your@gmail.com" required v-model="loginCommand.email" />
          <div class="flex flex-col gap-2">
            <BaseGInput name="password" label="Password" type="password" placeholder="Create a password" required v-model="loginCommand.password" />
            <a href="#" class="text-xs md:text-sm font-light underline underline-offset-4">Forget Password?</a>
          </div>
          <BaseGCheckbox name="rememberMe" placeholder="Remember Me" label="Remember Me"/>
          <BaseGButton type="submit">LOG IN</BaseGButton>
        </form>
        <div class="flex flex-col items-center gap-4 w-full">
          <span>OR</span>
          <button class="py-3 w-full border border-[#453F29]/20 flex items-center justify-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.81836V14.4656H18.4582C18.1746 15.9602 17.3236 17.2257 16.0472 18.0766L19.9417 21.0984C22.2108 19.0039 23.5199 15.9276 23.5199 12.273C23.5199 11.4221 23.4436 10.6039 23.3017 9.81849L12 9.81836Z" fill="#4285F4"/>
                <path d="M5.27461 14.2842L4.39625 14.9566L1.28711 17.3783C3.26165 21.2947 7.30862 24.0002 11.9995 24.0002C15.2394 24.0002 17.9557 22.9311 19.9412 21.0984L16.0467 18.0765C14.9776 18.7965 13.614 19.2329 11.9995 19.2329C8.87951 19.2329 6.22868 17.1275 5.27952 14.2911L5.27461 14.2842Z" fill="#34A853"/>
                <path d="M1.28718 6.62207C0.469042 8.23655 0 10.0584 0 12.0002C0 13.942 0.469042 15.7638 1.28718 17.3783C1.28718 17.3891 5.27997 14.2801 5.27997 14.2801C5.03998 13.5601 4.89812 12.7965 4.89812 12.0001C4.89812 11.2036 5.03998 10.44 5.27997 9.72L1.28718 6.62207Z" fill="#FBBC05"/>
                <path d="M11.9997 4.77818C13.767 4.77818 15.3379 5.38907 16.5925 6.56727L20.0288 3.13095C17.9452 1.18917 15.2398 0 11.9997 0C7.30887 0 3.26165 2.69454 1.28711 6.62183L5.27978 9.72001C6.22882 6.88362 8.87976 4.77818 11.9997 4.77818Z" fill="#EA4335"/>
            </svg>
            <span class="opacity-50">Google</span>
          </button>
        </div>
        <div class="flex md:hidden 2xl:flex text-xs md:text-base items-center gap-2" v-if="authStep == 'signup'">
          <span class="opacity-50">Already have an account?</span>
          <button @click="authStep = 'login'" class="underline underline-offset-2">Log in</button>
        </div>
        <div class="flex md:hidden 2xl:flex text-xs md:text-base items-center gap-2" v-else>
          <span class="opacity-50">Don't have an account?</span>
          <button @click="authStep = 'signup'" class="underline underline-offset-2">Sign up</button>
        </div>
      </div>
    </div>
    <div class="hidden relative w-1/2 md:flex flex-col items-center overflow-hidden h-full bg-center bg-cover" style="background-image: url(/images/landing-bg.png);">
      <div class="bg-black/50 absolute inset-0"></div>
      <div class="border border-white absolute -rotate-12 inset-0"></div>
      <NuxtLink to="/" class="2xl:hidden absolute z-10 flex flex-col items-center gap-4 top-[15%]">
        <h1 class="text-white font-modern text-6xl">Global Pure</h1>
        <span class="text-white text-3xl">Trading</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {LoginCommand, RegisterCommand} from "~/models/users/userCommands";
import {LoginUser, RegisterUser} from "~/services/user.service";
import {useToast} from "~/composables/useToast";

definePageMeta({
  layout:false
})

const authStep:Ref<'signup' | 'login'> = ref('signup');
const signupCommand:RegisterCommand = reactive({
  firstName:'',
  email:'',
  password:''
})
const loginCommand:LoginCommand = reactive({
  email:'',
  password:''
})

const authStore = useAuthStore();
const toast = useToast();
const SignUp = async ()=>{
  const result = await RegisterUser(signupCommand);
  if(result.isSuccess){
    await authStore.setToken({token:result.data!});
    toast.showToast(result.metaData.message);
  }else{
    toast.showError(result.metaData);
  }
}
const Login = async ()=>{
  const result = await LoginUser(loginCommand);
  if(result.isSuccess){
    await authStore.setToken({token:result.data!});
    toast.showToast(result.metaData.message);
  }else{
    toast.showError(result.metaData);
  }
}
</script>