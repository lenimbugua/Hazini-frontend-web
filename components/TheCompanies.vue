<script setup lang="ts">
// import { ListCompaniesParams } from "~/server/src/company";
import { useListCompaniesStore } from "../stores/list-companies";
import { useDateFormat } from "@vueuse/core";
import { useAuthStore } from "../stores/login";
const formatter = ref("MM/DD/YYYY");

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
const formatDate = (date: Date) => useDateFormat(date, formatter);

</script>
<template>
  <div class=" flex justify-start text-xl">
    Companies
  </div>
  <br>
  <Spin v-if="pending" class="h-20 w-20 text-teal-700" />
  <div v-else class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
        <tr class="divide-x divide-gray-300">
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Company Name</th>
          <th scope="col" class="py-3 px-6">Address</th>
          <th scope="col" class="py-3 px-6">Employees</th>
          <th scope="col" class="py-3 px-6">Profit Share</th>
          <th scope="col" class="py-3 px-6">Max.Loan.Percent</th>
          <th scope="col" class="py-3 px-6">Loan.Period</th>
          <th scope="col" class="py-3 px-6">Approve.Loans</th>
          <th scope="col" class="py-3 px-6">Status</th>
          <th scope="col" class="py-3 px-6">Created.At</th>
          <th scope="col" class="py-3 px-6">Edit</th>
          <th scope="col" class="py-3 px-6">Enable/Disable</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(data, index) in data" :key="index" :class="{ 'bg-gray-50': index % 2 === 1 }"
          class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer">
          <td class="py-4 px-6">{{ data.id }}</td>
          <td class="py-4 px-6">{{ data.name }}</td>
          <td class="py-4 px-6">{{ data.physical_address }}</td>
          <td class="py-4 px-6">{{ data.number_of_employees }}</td>
          <td class="py-4 px-6">{{ data.profit_share_percent }}</td>
          <td class="py-4 px-6">{{ data.max_loan_percent }}</td>
          <td class="py-4 px-6">{{ data.loan_period }}</td>
          <td class="py-4 px-6">{{ data.approves_loan }}</td>
          <td class="py-4 px-6">{{ data.status }}</td>
          <td class="py-4 px-6">{{ formatDate(data.created_at) }}</td>
          <td class="py-4 px-6">
            <a href="#" class="font-medium text-teal-700 hover:underline">Edit</a>
          </td>
          <td class="py-4 px-6">
          <td class="py-4 px-6">
            <label class="inline-flex relative items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600">
              </div>
            </label>
          </td>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
