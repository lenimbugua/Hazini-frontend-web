<script setup lang="ts">
</script>
<template>
  <div class="flex justify-center h-full">
    <div class="h-full items-center p-8 pt-48">
      <div class="w-full">
        <div class="block">
          <div class="flex justify-center">
            <router-link to=""
              ><img
                src="../assets/images/hazini_logo.png"
                style="margin-left: 10px"
            /></router-link>
          </div>
          <br />
          <form @submit.prevent="">
            <div class="text-xl mb-2 text-black-500 font-medium">Login</div>

            <div class="block mb-3">
              <span>
                <label for="" class="block text-xs font-bold text-gray-500 mb-2"
                  >Phone number</label
                >
              </span>
              <input
                name="Phone Number"
                class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-cyan-400"
                maxlength="12"
                placeholder="07xxxxxxxx"
                required
              />
            </div>
            <div class="block mb-3">
              <span>
                <label for="" class="block text-xs font-bold text-gray-500 mb-2"
                  >Password</label
                >
              </span>
              <input
                name="Password"
                class="block rounded-md w-full py-2 px-3 border outline-none focus-visible:border-cyan-400"
                type="password"
                required
              />
            </div>
            <div class="block px-4 py-2 text-gray-600 text-sm rounded-md"></div>
            <div class="block">
              <button
                type="submit"
                class="block w-full text-center rounded-md bg-[#2C7075] px-3 py-2 text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <div class="my-4">
          <router-link :to="{ name: '' }" class="my-4 text-sm underline"
            >Forgot Password</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
