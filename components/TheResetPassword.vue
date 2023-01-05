<script setup lang="ts">
const router = useRouter();
const reset  = async () => {
  // router.push("/dashboard");
};
</script>
<template>
  <form @submit.prevent="reset" class="w-full max-w-sm">
    <div class="mb-6">
      <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Username</label><input type="tel"
        name="email" id="email"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        required value="" />
    </div>
    <button type="submit"
      class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-500 w-full">
      <span>Next</span>
    </button>
  </form>
</template>
