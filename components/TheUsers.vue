<script setup lang="ts">
import { useAuthStore } from "../stores/login";
import { useDateFormat } from "@vueuse/core";
import { EllipsisHorizontalIcon } from "@heroicons/vue/20/solid";

const formatter = ref("MM/DD/YYYY");
const { user } = storeToRefs(useAuthStore());
const test = ref();
const pageSize = ref(10);
const pageID = ref(1);
const {
  data: users,
  pending,
  error,
  refresh,
} = await useFetch("/api/users/list", {
  query: {
    pageSize: pageSize.value,
    pageID: pageID.value,
    accessToken: user.value.refresh_token,
  },
});
refresh();
const formatDate = (date: Date) => useDateFormat(date, formatter);
</script>
<template>
  <div class=" flex justify-start">
    Users
  </div>

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
  <br />
  <Spin v-if="pending" class="h-20 w-20 text-teal-700" />
  <div v-else class="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg">
    <div class="overflow-auto h-[35rem] relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr class="divide-x divide-gray-300">
            <th scope="col" class="py-3 px-6"></th>
            <th scope="col" class="py-3 px-6">User name</th>
            <th scope="col" class="py-3 px-6">Phone Number</th>
            <th scope="col" class="py-3 px-6">ID number</th>
            <th scope="col" class="py-3 px-6">Salary</th>
            <th scope="col" class="py-3 px-6">Loan</th>
            <th scope="col" class="py-3 px-6">Balance</th>
            <th scope="col" class="py-3 px-6">Company</th>
            <th scope="col" class="py-3 px-6">Branch</th>
            <th scope="col" class="py-3 px-6">Assignment</th>
            <th scope="col" class="py-3 px-6">Status</th>
            <th scope="col" class="py-3 px-6">Created at</th>
            <th scope="col" class="py-3 px-6">Enable/Disable</th>
            <th scope="col" class="py-3 px-6">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.phone_number" :class="{ 'bg-gray-50': index % 2 === 1 }"
            class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
              {{ index + 1 }}
            </th>
            <td class="py-4 px-6">{{ user.full_name }}</td>
            <td class="py-4 px-6">{{ user.phone_number }}</td>
            <td class="py-4 px-6">{{ user.national_id_number }}</td>
            <td class="py-4 px-6">{{ user.net_salary }}</td>
            <td class="py-4 px-6">{{ user.loan_amount }}</td>
            <td class="py-4 px-6">{{ user.balance }}</td>
            <td class="py-4 px-6">{{ user.company_name }}</td>
            <td class="py-4 px-6">{{ user.branch_name }}</td>
            <td class="py-4 px-6">{{ user.assignment }}</td>
            <td class="py-4 px-6">{{ user.status }}</td>
            <td class="py-4 px-6">{{ formatDate(user.created_at) }}</td>
            <td class="py-4 px-6">
              <label class="inline-flex relative items-center mr-5 cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600">
                </div>
              </label>
            </td>
            <td class="py-4 px-6 cursor-pointer">
              <EllipsisHorizontalIcon class="text-teal-700 h-6 w-6" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
