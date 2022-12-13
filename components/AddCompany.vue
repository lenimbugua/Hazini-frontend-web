<script setup lang="ts">
import { CreateCompanyParams } from "~/server/src/company";
import { useCreateCompanyStore } from "../stores/create-company";
import { useAuthStore } from "../stores/login";

const { createCompany } = useCreateCompanyStore();
const { user } = storeToRefs(useAuthStore());

const name = ref("");
const physicalAddress = ref("");
const maxLoanPercent = ref(0);
const numberOfEmployees = ref(0);
const loanPeriod = ref("");
const approvesLoan = ref(false);
const status = ref(1);
const profitSharePercent = ref(0);

const createNewCompany = () => {
  const accessToken = user.value.refresh_token;
  const company: CreateCompanyParams = {
    name: name.value,
    physical_address: physicalAddress.value,
    max_loan_percent: maxLoanPercent.value,
    number_of_employees: numberOfEmployees.value,
    loan_period: loanPeriod.value,
    approves_loan: approvesLoan.value,
    status: status.value,
    profit_share_percent: profitSharePercent.value,
  };
  createCompany(company, accessToken);
};

const title = ref("Add Company"); // change current title
</script>
<template>
  <div class="shadow-md p-5 bg-white">
    <form @submit.prevent="createNewCompany" class="w-full">
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
      <div class="mb-3">
        <label
          for="max-loan-percent"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Max percent of loan amount that can be taken as loan</label
        ><input
          type="number"
          id="max-loan-percent"
          step="0.01"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
          required
          v-model="maxLoanPercent"
        />
      </div>

      <div class="mb-3">
        <label
          for="physical-address"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Percentage of interest retained by this company</label
        ><input
          type="number"
          id="physical-address"
          step="0.01"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 focus:bg-white ring-1 ring-slate-200"
          aria-required
          v-model="profitSharePercent"
        />
      </div>
      <div class="mb-3">
        <label
          for="physical-address"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Period employees are allowed to request loan</label
        >
        {{ loanPeriod }}
        <input
          type="range"
          id="physical-address"
          min="1"
          max="28"
          class="text-slate-900 rounded-md block w-full px-3 h-10 sm:text-sm focus:outline-none placeholder:text-slate-400"
          aria-required
          v-model="loanPeriod"
        />
      </div>
      <div class="mb-3">
        <label
          for="physical-address"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Should loans be approved?</label
        >
        <div class="flex space-x-3 mt-2 mb-3">
          <input
            type="checkbox"
            id="physical-address"
            class="text-slate-900 bg-[#2C7075] rounded-md block w-10 px-3 h-10 sm:text-sm focus:outline-none placeholder:text-slate-400"
            aria-required
            v-model="approvesLoan"
          />
          <div class="text-[#2C7075]">{{ approvesLoan }}</div>
        </div>
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
