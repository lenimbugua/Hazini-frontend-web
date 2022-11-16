<script setup lang="ts">
const title = ref("Add Company"); // change current title
</script>
<template>
  <div class="shadow-md p-5 bg-white">
    <form action="/login" class="w-full">
      <div class="mb-3">
        <label
          for="name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Name</label
        ><input
          type="text"
          id="name"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
          required
          value=""
        />
      </div>
      <div class="mb-3">
        <label
          for="physical-address"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Physical Address</label
        ><input
          type="text"
          id="physical-address"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"
          aria-required
          value=""
        />
      </div>
      <div class="mb-3">
        <label
          for="name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Max percent of loan amount that can be taken as loan</label
        ><input
          type="text"
          id="name"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
          required
          value=""
        />
      </div>

      <div class="mb-3">
        <label
          for="physical-address"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Percentage of interest retained by this company</label
        ><input
          type="text"
          id="physical-address"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"
          aria-required
          value=""
        />
      </div>
      <button
        type="submit"
        class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-cyan-600 hover:text-sky-50/80 hover:bg-cyan-400"
      >
        <span>Add Company</span>
      </button>
    </form>
  </div>
</template>
