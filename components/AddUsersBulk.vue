<script setup lang="ts">
import { useCreateUsersBulkStore } from "../stores/create-users-bulk";
import { useAuthStore } from "../stores/login";

const { createUsersBulk } = useCreateUsersBulkStore();
const { user } = storeToRefs(useAuthStore());
const { pending, error, results } = storeToRefs(useCreateUsersBulkStore());

const users = ref(null);
const addusers = async () => {
  const accessToken = user.value.refresh_token;
  let formData = new FormData();
  if (!users.value) return;
  formData.append("file", users.value.files[0]);
  await createUsersBulk(formData, accessToken);
  console.log(results.value);
};

const title = ref("Add Users from excel file"); // change current title
</script>
<template>
  
  <div class="shadow-md p-5 bg-white">
    <form @submit.prevent="addusers" class="w-full">
      <div class="mb-3">
        <label
          for="users-excel"
          class="block text-sm font-semibold leading-6 text-gray-900"
          >Users excel *</label
        >
        <input
          type="file"
          ref="users"
          id="users-excel"
          class="appearance-none text-slate-900 bg-gray-50 rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 ring-1 ring-slate-200"
          required
        />
      </div>

      <div v-if="results" class="text-sm space-y-3 mb-3">
        <div class="border border-teal-300 bg-teal-100 p-4">
          <p class="text-green-500">
            Records saved:{{ results.results.total_inserted }}
          </p>
          <p class="text-red-500">
            Records failed:{{ results.results.total_failed }}
          </p>
          <p class="text-gray-700">
            Total Records :{{ results.results.total_records }}
          </p>
        </div>
        <div class="border border-red-300 bg-red-50 p-4 space-y-3">
          <div
            v-for="error in results.errors"
            class="text-red-400"
            :key="error.row"
          >
            <p class="flex space-x-4">
              <span>Row: {{ error.row }}</span>
              <span>Cell: {{ error.cell }}</span>
              <span> Column: {{ error.column }} </span>
            </p>
            Description:{{ error.description }}
          </div>
        </div>
      </div>

      <p class="text-sm text-red-500">{{ error }}</p>
      <button
        type="submit"
        class="inline-flex rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-cyan-600 hover:text-sky-50/80 hover:bg-cyan-400"
      >
        <Spin v-if="pending" />
        <span v-else>Add Users</span>
      </button>
    </form>
  </div>
</template>
