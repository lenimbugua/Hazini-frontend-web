<script setup>
import { useAuthStore } from "../stores/login";

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
console.log(users.value);
refresh();
const submit = async () => {
  console.log(test);
};
</script>
<template>
  <div class="flex justify-end">
    <form @submit.prevent="submit" class="w-1/4">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-500 sr-only dark:text-white"
        >Search</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 pl-10 text-sm text-gray-400 border border-cyan-300 rounded-lg bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
          placeholder="Search PhoneNumber..."
          required
        />

        <button
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-cyan-700 rounded-r-lg border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          <svg
            aria-hidden="true"
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </form>
  </div>
  <br />
  <Spin v-if="pending" class="h-20 w-20 text-teal-700" />
  <div
    v-else
    class="shadow overflow-scroll border-b border-gray-200 sm:rounded-lg"
  >
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-200">
        <tr>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Phone
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            ID Number
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Salary
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Loan
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Balance
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Company
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Branch
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Assignment
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Status
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Created At
          </th>
          <th scope="col" class="relative px-2 py-3">
            <span class="tracking-wide sr-only"
              >Deactivate and or View Details</span
            >
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          class="hover:bg-teal-50 cursor-pointer"
          v-for="(user, index) in users"
          :key="index"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ user.full_name }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.phone_number }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ user.national_id_number }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.net_salary }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">null</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">null</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.company_id }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.branch_id }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.assignment }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.status }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ user.created_at }}</div>
          </td>
          <td
            class="flex divide-x divide-blue-500 space-x-1 pr-2 py-4 whitespace-nowrap text-center text-sm font-medium"
          >
            <div class="cursor-pointer text-indigo-600 hover:text-indigo-900">
              Deactivate
            </div>
            <div class="text-red-600 hover:text-indigo-900 cursor-pointer">
              Details
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
