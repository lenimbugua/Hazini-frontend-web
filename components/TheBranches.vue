<script setup lang="ts">
import { useAuthStore } from "../stores/login";
import { useDateFormat } from "@vueuse/core";

const { user } = storeToRefs(useAuthStore());

const formatter = ref("MM/DD/YYYY");

const formatDate = (date: Date) => useDateFormat(date, formatter);

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
    class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg"
  >
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
        <tr
          v-for="(branch, index) in branches"
          :key="index"
          :class="{ 'bg-gray-50': index % 2 === 1 }"
          class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer"
        >
          <td class="py-4 px-6">{{ index + 1 }}</td>
          <td class="py-4 px-6">{{ branch.company_name }}</td>
          <td class="py-4 px-6">{{ branch.name }}</td>
          <td class="py-4 px-6">{{ branch.physical_address }}</td>
          <td class="py-4 px-6">{{ branch.number_of_employees }}</td>
          <td class="py-4 px-6">{{ formatDate(branch.created_at) }}</td>
          <td class="py-4 px-6">
            <a href="#" class="font-medium text-teal-700 hover:underline"
              >Edit</a
            >
          </td>
          <td class="py-4 px-6">
            <label
              class="inline-flex relative items-center mr-5 cursor-pointer"
            >
              <input type="checkbox" value="" class="sr-only peer" checked />
              <div
                class="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
              ></div>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
