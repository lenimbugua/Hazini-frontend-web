<script setup>
import { useAuthStore } from "../stores/login";
const { user } = storeToRefs(useAuthStore());

const pageSize = ref(10);
const pageID = ref(1);
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
            class="py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          ></th>
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
            Address
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            #Employees
          </th>

          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Created At
          </th>
          <th scope="col" class="relative px-2 py-3">
            <span class="tracking-wide sr-only">Edit and or Disable</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
          class="hover:bg-teal-50 cursor-pointer"
          v-for="(branch, index) in branches"
          :key="index"
          :class="{ 'bg-gray-50': index % 2 == 1 }"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ index + 1 }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ branch.company_id }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ branch.name }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ branch.physical_address }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ branch.number_of_employees }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ branch.created_at }}</div>
          </td>
          <td
            class="flex divide-x divide-blue-500 space-x-1 pr-2 py-4 whitespace-nowrap text-center text-xs font-medium"
          >
            <div class="cursor-pointer text-indigo-600 hover:text-indigo-900">
              Edit
            </div>
            <div class="text-red-600 hover:text-indigo-900 cursor-pointer">
              Disable
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
