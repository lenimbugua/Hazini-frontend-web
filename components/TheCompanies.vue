<script setup>
// import { ListCompaniesParams } from "~/server/src/company";
import { useListCompaniesStore } from "../stores/list-companies";
import { useAuthStore } from "../stores/login";

const { listCompanies } = useListCompaniesStore();
const { user } = storeToRefs(useAuthStore());

const pageSize = ref(10);
const pageID = ref(1);
const { data, pending, error, refresh } = await useFetch("/api/company/list", {
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
            Company Name
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
            Profit Share
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Max Loan Percent
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Loan Period
          </th>
          <th
            scope="col"
            class="px-2 py-3 text-left text-xs font-medium tracking-wide sr text-gray-500 uppercase"
          >
            Aprroves Loans
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
            <span class="tracking-wide sr-only">Edit and or Disable</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr
        class="hover:bg-teal-50 cursor-pointer"
          v-for="(company, index) in data"
          :key="company.id"
          :class="{ 'bg-gray-50': index % 2 == 1 }"
        >
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ company.name }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ company.physical_address }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ company.number_of_employees }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ company.profit_share_percent }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">
              {{ company.max_loan_percent }}
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ company.loan_period }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ company.approves_loan }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ company.status }}</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{ company.created_at }}</div>
          </td>
          <td
            class="flex divide-x divide-gray-700 space-x-1 pr-2 py-4 whitespace-nowrap text-center text-xs font-medium"
          >
            <div class="cursor-pointer text-indigo-600 hover:text-indigo-900">
              Edit
            </div>
            <div class="text-red-600 hover:text-indigo-900 cursor-pointer pl-2">
              Disable
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
