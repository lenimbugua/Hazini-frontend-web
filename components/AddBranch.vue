<script setup lang="ts">
import { CreateBranchParams } from "~/server/src/branch";
import { useCreateBranchStore } from "../stores/create-branch";
import { useAuthStore } from "../stores/login";

const { createBranch } = useCreateBranchStore();
const {
  pending: addBranchIsPending,
  error: addBranchIsErroring,
  responseOK,
} = storeToRefs(useCreateBranchStore());
const { user } = storeToRefs(useAuthStore());

const {
  data: companies,
  pending,
  error,
  refresh,
} = await useFetch("/api/company/list", {
  query: {
    pageSize: 10,
    pageID: 1,
    accessToken: user.value.refresh_token,
  },
});

const name = ref("");
const physicalAddress = ref("");
const numberOfEmployees = ref(0);
const status = ref(1);
const companyID = ref(0);

const createNewBranch = async () => {
  const accessToken = user.value.refresh_token;
  const branch: CreateBranchParams = {
    name: name.value,
    physical_address: physicalAddress.value,
    number_of_employees: numberOfEmployees.value,
    status: status.value,
    company_id: companyID.value,
  };
  await createBranch(branch, accessToken);
  if (responseOK.value) {
    navigateTo("/branches");
  }
};

const title = ref("Add Company"); // change current title
</script>
<template>
  <div class="shadow-md p-5 bg-white">
    <form @submit.prevent="createNewBranch" class="w-full">
      <div class="mb-3">
        <label
          for="name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Select Company</label
        ><select
          v-model="companyID"
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option
            v-for="company in companies"
            :value="company.id"
            :key="company.id"
          >
            {{ company.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label
          for="name"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Name</label
        ><input
          type="text"
          id="name"
          v-model="name"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
          required
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
          v-model="physicalAddress"
        />
      </div>
      <div class="mb-3">
        <label
          for="physical-address"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Number of Employees</label
        ><input
          type="number"
          id="physical-address"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"
          aria-required
          v-model="numberOfEmployees"
        />
      </div>
      <button
        type="submit"
        class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-teal-700 hover:text-sky-50/80 hover:bg-teal-600"
      >
        <spin v-if="addBranchIsPending" />
        <span v-else>Add Branch</span>
      </button>
    </form>
  </div>
</template>
