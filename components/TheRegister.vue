<script setup lang="ts">
import { CreateUserParams } from "~/server/src/user";
import { removeLeadingZero, addCountryCode } from "~/utils/format-stuff";
import { useCreateUserStore } from "../stores/register";

import { useAuthStore } from "../stores/login";
const { setViewToDisplay } = useAuthStore();

const { createUser } = useCreateUserStore();

const loading = ref(false);
const { pending, error, responseOK } = storeToRefs(useCreateUserStore());

const countryCode = "+254";
const fullNames = ref("");
const phoneNumber = ref("");
const password = ref("");

const register = async () => {
  const phone = addCountryCode(phoneNumber.value, countryCode);
  const body: CreateUserParams = {
    full_name: fullNames.value,
    phone_number: phone,
    password: password.value,
  };
  await createUser(body);
  if (responseOK.value) {
    setViewToDisplay("LOGIN");
  }
};
</script>
<template>
  <form @submit.prevent="register" class="w-full max-w-sm">
    <div class="mb-6">
      <label
        for="full_names"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Full Names</label
      ><input
        type="text"
        name="full_names"
        id="full_names"
        placeholder="James Doe"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        required
        v-model="fullNames"
      />
    </div>
    <div class="mb-6">
      <label
        for="phone"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Phone Number</label
      >
      <div
        :class="{
          'border-red-500': error.hasError && error.field === 'phone_number',
        }"
        class="rounded-md w-full h-10 bg-gray-200 sm:text-sm flex border"
      >
        <div
          class="flex text-center h-full items-center justify-center pl-2 pr-1"
        >
          +254
        </div>
        <input
          type="tel"
          placeholder="7000000"
          name="phone"
          pattern="[1-9]{1}[0-9]{1}[0-9]{3}[0-9]{4}"
          id="phone"
          class="appearance-none px-1 text-slate-900 w-full h-full rounded-r-md bg-white block focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A]"
          required
          v-model="phoneNumber"
        />
      </div>
      <p
        v-if="error.hasError && error.field === 'phone_number'"
        class="text-red-500 mb-6 text-sm"
      >
        {{ error.message }}
      </p>
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Password</label
      ><input
        type="password"
        name="password"
        id="password"
        placeholder="xxxxxxxx"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        aria-required
        required
        v-model="password"
        minlength="6"
      />
    </div>
    <p
      v-if="error.hasError && error.field === 'none'"
      class="text-red-500 mb-6"
    >
      {{ error.message }}
    </p>
    <button
      type="submit"
      class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-700 w-full"
    >
      <Spin v-if="pending" />
      <span v-else>Sign in to account</span>
    </button>
  </form>
</template>
