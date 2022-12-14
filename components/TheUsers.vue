<script setup lang="ts">
import { useAuthStore } from "../stores/login";

const { user } = storeToRefs(useAuthStore());

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
</script>
<template>
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
        <tr v-for="(user, index) in users" :key="index">
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
