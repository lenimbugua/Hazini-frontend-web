<script setup lang="ts">
import { ref, onMounted } from "vue";
const test = ref();
const router = useRouter();
const loginUser = async () => {
  console.log(test);
  const url = `https://hazini.onrender.com/users/login`;
  try {
    const res = await fetch(url);
  } catch (error) {
    console.log(error);
  }
};

const goToDashboard = () => {
  router.push("/dashboard");
};
onMounted(() => {
  loginUser();
});
</script>
<template>
  <form @submit.prevent="goToDashboard" class="w-full max-w-sm">
    <div class="mb-6">
      <label
        for="phone"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Phone Number</label
      ><input
        type="tel"
        name="phone"
        id="phone"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        required
        value=""
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
        id="password"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        aria-required
        value=""
      />
    </div>
    <button
      type="submit"
      class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-500 w-full"
    >
      <span>Sign in to account</span>
    </button>
    <p class="mt-6 text-center">
      <a href="/password/reset" class="text-sm hover:underline"
        >Forgot password?</a
      >
    </p>
  </form>
</template>
