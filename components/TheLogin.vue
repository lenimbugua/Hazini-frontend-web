<script setup lang="ts">
import { LoginCredentials } from "~/server/src/user";
import { removeLeadingZero, addCountryCode } from "~/utils/format-stuff";
import { useAuthStore } from "../stores/login";

const { login: loginUser } = useAuthStore();
const { pending, error, responseOK } = storeToRefs(useAuthStore());
const countryCode = "+254";
const username = ref("");
const password = ref("");

const login = async () => {
  //   const phone = addCountryCode(phoneNumber.value, countryCode);
  const body: LoginCredentials = {
    username: username.value,
    password: password.value,
  };
  await loginUser(body);
  if (responseOK.value) {
    console.log("hereeee");
    navigateTo("/dashboard");
  }
};
</script>
<template>
  <form @submit.prevent="login" class="w-full max-w-sm">
    <div class="mb-6">
      <label
        for="username"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >username</label
      >
      <input
        type="text"
        placeholder="user@xyz.com"
        name="username"
        id="username"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        required
        v-model="username"
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Password</label
      ><input
        type="password"
        name="password"
        placeholder="XXXXXXX"
        id="password"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        aria-required
        required
        v-model="password"
        minlength="6"
      />
    </div>
    <p class="text-red-500 mb-6 text-sm">{{ error }}</p>
    <button
      type="submit"
      class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-500 w-full"
    >
      <Spin v-if="pending" />
      <span v-else>Sign in to account</span>
    </button>
    <p class="mt-6 text-center">
      <a href="/password/reset" class="text-sm hover:underline"
        >Forgot password?</a
      >
    </p>
  </form>
</template>
