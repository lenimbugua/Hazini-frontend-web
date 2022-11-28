<script setup lang="ts">
import { LoginCredentials } from "~/server/src/user";
import { removeLeadingZero, addCountryCode } from "~/utils/format-stuff";
import { useAuthStore } from "../stores/auth";

const { login: loginUser } = useAuthStore();
const { pending } = storeToRefs(useAuthStore());
const countryCode = "+254";
const phoneNumber = ref("");
const password = ref("");
const loading = ref(false);
const err = ref("");

const login = async () => {
  const phone = addCountryCode(phoneNumber.value, countryCode);

  loading.value = true;
  const body: LoginCredentials = {
    phone_number: phone,
    password: password.value,
  };
  await loginUser(body);
};

const router = useRouter();
const goToDashboard = () => {
  router.push("/dashboard");
};
</script>
<template>
  <form @submit.prevent="login" class="w-full max-w-sm">
    <div class="mb-6">
      <label
        for="phone"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Phone Number</label
      >
      <div
        class="rounded-md w-full h-10 bg-gray-200 sm:text-sm flex border border-slate-200"
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
      />
    </div>
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
