<script setup lang="ts"></script>
<template>
  <div class="mx-auto w-1/2 p-5">
    <br />
    <form @submit.prevent="">
      <div class="text-sm mb-2 text-black-500 font-medium text-center">
        Create User
      </div>
      <div class="mb-2">
        <label
          for="full_names"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Full Name</label
        >
        <input
          name="full_names"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="full name "
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="phone_number"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Phone Number</label
        >
        <input
          name="phone_number"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="phone number "
          required
        />
      </div>
      <div class="mb-2">
        <label
          for="Enter-password"
          class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
          >Enter password</label
        >
        <input
          name="enter-password"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=" enter password"
          required
        />
      </div>
      <div class="block mb-3">
        <label for="confirm-password" class="block text-sm font-medium text-black-900 mb-2"
          >Confirm password</label
        >
        <input
          name="Confirm-password"
          type="text"
          class="bg-gray-50 border border-white-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-white-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="confirm password "
          required
        />
      </div>
      <div class="block px-4 py-2 text-gray-600 text-sm rounded-md"></div>
      <div class="block">
        <button
          type="submit"
          class="block w-full text-center rounded-md bg-[#2C7075] px-3 py-2 text-white"
        >
          Create
        </button>
      </div>
    </form>
  </div>
</template>
