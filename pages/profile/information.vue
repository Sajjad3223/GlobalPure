<template>
  <div>
    <Head>
      <Title>Information | Premium Saffron</Title>
    </Head>
    <form v-if="!pending" class="grid grid-cols-2 gap-4" @submit.prevent="updateInfo">
      <BaseGInput label="First Name" name="firstName" v-model="editUserCommand.firstName" />
      <BaseGInput label="Last Name" name="lastName" v-model="editUserCommand.lastName"/>
      <BaseGInput label="Email" name="email" v-model="editUserCommand.email"/>
      <BaseGInput label="Phone Number" name="phoneNumber" v-model="editUserCommand.phoneNumber"/>
      <BaseGButton type="submit">Edit Information</BaseGButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import type {EditUserCommand} from "~/models/users/userCommands";
import {EditInformation, GetCurrentUser} from "~/services/user.service";
import type {UserDto} from "~/models/users/userDto";

definePageMeta({
  layout: 'profile',
  title: 'Information'
})

const loading = ref(false);

const {data,pending} = await useAsyncData('GetUserData',()=>GetCurrentUser());
if(!data.value?.isSuccess)
{
  if(process.server)
    throw createError({statusCode:404});
}

const userData:Ref<UserDto> = ref(data.value?.data!);

const editUserCommand:EditUserCommand = reactive({
  firstName:userData.value.firstName,
  lastName:userData.value.lastName,
  email:userData.value.email,
  phoneNumber:userData.value.phoneNumber
})

const toast = useToast();
const updateInfo = async () => {
  loading.value = true;

  const result = await EditInformation(editUserCommand);
  if(result.isSuccess){
    toast.showToast(result.metaData.message);
  }else{
    toast.showError(result.metaData);
  }

  loading.value = false;
}

</script>
