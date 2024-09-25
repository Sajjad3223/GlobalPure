<template>
  <div>
    <Head>
      <Title>Information | Premium Saffron</Title>
    </Head>
    <form class="grid grid-cols-2 gap-4" @submit.prevent="updateInfo">
      <BaseGInput label="First Name" v-model="editUserCommand.firstName"/>
      <BaseGInput label="Last Name" v-model="editUserCommand.lastName"/>
      <BaseGInput label="Email" v-model="editUserCommand.email"/>
      <BaseGInput label="Phone Number" v-model="editUserCommand.phoneNumber"/>
      <BaseGButton type="submit">Edit Information</BaseGButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import type {EditUserCommand} from "~/models/users/userCommands";
import {EditInformation} from "~/services/user.service";

definePageMeta({
  layout: 'profile',
  title: 'Information'
})

const loading = ref(false);

const accountStore = useAccountStore();
onMounted(async () => {
  console.log(accountStore.currentUser)
  if (!accountStore.currentUser) {
    loading.value = true;
    await accountStore.initData();
    loading.value = false;
  }
})

const editUserCommand:EditUserCommand = reactive({
  firstName:accountStore.currentUser?.firstName,
  lastName:accountStore.currentUser?.lastName,
  email:accountStore.currentUser?.email,
  phoneNumber:accountStore.currentUser?.phoneNumber
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
