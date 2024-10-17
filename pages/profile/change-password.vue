<template>
  <div>
    <Head>
      <Title>Change Password | Premium Saffron</Title>
    </Head>

    <form class="w-full grid md:grid-cols-2 gap-4" @submit.prevent="updatePassword">
      <BaseGInput type="password" label="Current Password" v-model="changePasswordCommand.oldPassword"/>
      <div></div>
      <BaseGInput type="password" label="New Password" v-model="changePasswordCommand.newPassword"/>
      <BaseGInput type="password" label="Confirm New Password"/>
      <BaseGButton type="submit">Change Password</BaseGButton>
      <NuxtLink to="/profile/information" class="py-4 text-center w-full bg-primary/10 text-primary md:hidden" >Back</NuxtLink>
    </form>

  </div>
</template>

<script setup lang="ts">
import type {ChangePasswordCommand} from "~/models/users/userCommands";
import {ChangePassword} from "~/services/user.service";

definePageMeta({
  layout: 'profile',
  title: 'Change Password'
})

const loading = ref(false);

const changePasswordCommand:ChangePasswordCommand = reactive({
  oldPassword:'',
  newPassword:''
})

const toast = useToast();
const updatePassword = async () => {
  loading.value = true;

  const result = await ChangePassword(changePasswordCommand);
  if(result.isSuccess){
    toast.showToast(result.metaData.message);
  }else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>
