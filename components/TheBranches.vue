<script setup lang="ts">
import { useAuthStore } from "../stores/login";
import { useDateFormat } from "@vueuse/core";
import { waitForDebugger } from "inspector";

const { user } = storeToRefs(useAuthStore());

const formatter = ref("MM/DD/YYYY");

const formatDate = (date: Date) => useDateFormat(date, formatter);

const pageSize = ref(10);
const pageID = ref(1);
const isOpen = ref(false)
const test = ref();
const companyID = ref();

const {
  data: branches,
  pending,
  error,
  refresh,
} = await useFetch("/api/branch/list", {
  query: {
    pageSize: pageSize.value,
    pageID: pageID.value,
    accessToken: user.value.refresh_token,
  },
});
refresh();

const edit = async () => {
  console.log(test)

}

</script>
<template>
  <div class=" flex justify-start text-xl text-black">
    Branches
  </div>
  <br>
  <!-- modal -->
  <div class="container mx-auto">
    <div v-show="isOpen" class="
              absolute
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-gray-700 bg-opacity-50
            ">
      <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl  shrink-0 fixed  justify-center items-center flex">
        <div class="mt-4">
          <p class="mb-4 text-sm font-semibold ">
            Update Branch
          </p>
          <form class="w-full max-w-sm" @submit.prevent="edit">
            <div class="md:w-full">
              <label for="" class="block text-xs font-bold text-gray-500 mb-2">Company Name</label>
              <select v-model="companyID"
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option v-for="branch in branches" :value="branch.company_id" :key="branch.company_id">
                  {{ branch.company_name }}
                </option>>
              </select>
            </div>
            <div class="md:w-1/3">
              <label for="" class="block text-xs font-bold text-gray-500 mb-2">Branch</label>
            </div>
            <div class="md:w-full">
              <input class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-teal-600" />
            </div>
            <div class="md:w-1/3">
              <label for="" class="block text-xs font-bold text-gray-500 mb-2">Address</label>
            </div>
            <div class="md:w-full">
              <input class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-teal-600" />
            </div>

            <div class="md:w-1/3">
              <label for="" class="block text-xs font-bold text-gray-500 mb-2">Employees</label>
            </div>
            <div class="md:w-full">
              <input class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-teal-600" />
            </div>
            <br>
            <button @click="isOpen = false" class="px-6 py-2  text-teal-800 border hover:bg-teal-500 border-teal-600 rounded">
              Cancel
            </button>
            <button class="px-6 py-2 ml-2 text-blue-100 bg-teal-600 hover:bg-teal-500 rounded" type="submit">
              Edit
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>
  <!-- search bar -->
  <div class="flex justify-end">
    <form class="mb-3 w-1/3">
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input type="search" id="default-search"
          class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0"
          placeholder="Search users..." required />
        <button type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1">
          Search
        </button>
      </div>
    </form>
  </div>
  <br>
  <!-- table -->
  <Spin v-if="pending" class="h-20 w-20 text-teal-700" />
  <div v-else class="overflow-auto h-[35rem] relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
        <tr class="divide-x divide-gray-300">
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Company Name</th>
          <th scope="col" class="py-3 px-6">Branch</th>
          <th scope="col" class="py-3 px-6">Address</th>
          <th scope="col" class="py-3 px-6">Employees</th>
          <th scope="col" class="py-3 px-6">Created.At</th>
          <th scope="col" class="py-3 px-6">Edit</th>
          <th scope="col" class="py-3 px-6">Enable/Disable</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(branch, index) in branches" :key="index" :class="{ 'bg-gray-50': index % 2 === 1 }"
          class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer">
          <td class="py-4 px-6">{{ index + 1 }}</td>
          <td class="py-4 px-6">{{ branch.company_name }}</td>
          <td class="py-4 px-6">{{ branch.name }}</td>
          <td class="py-4 px-6">{{ branch.physical_address }}</td>
          <td class="py-4 px-6">{{ branch.number_of_employees }}</td>
          <td class="py-4 px-6">{{ formatDate(branch.created_at) }}</td>
          <td class="py-4 px-6">
            <a href="#" @click="isOpen = true" class="font-medium text-teal-700 hover:underline ">Edit</a>
          </td>
          <td class="py-4 px-6">
            <label class="inline-flex relative items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600">
              </div>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
