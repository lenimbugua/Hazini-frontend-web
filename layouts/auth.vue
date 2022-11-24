<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
const { setViewToDisplay } = useAuthStore();
const { viewToDisplay } = storeToRefs(useAuthStore());

const setAuthViewToDisplay = () => {
  return viewToDisplay.value === "LOGIN"
    ? setViewToDisplay("REGISTER")
    : setViewToDisplay("LOGIN");
};
</script>

<template>
  <main
    class="bg-img-1 relative flex flex-1 bg-img-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8"
  >
    <img
      src="@/assets/images/beams-cover@95.jpeg"
      alt=""
      class="absolute top-0 inset-0 left-1/2 -ml-[47.5rem] w-[122.5rem] max-w-none"
    />
    <div
      class="absolute inset-0 text-slate-900/[0.07] [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
    >
      <svg
        class="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid-bg"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="100%"
            patternTransform="translate(0 -1)"
          >
            <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
      </svg>
    </div>
    <div
      class="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16"
    >
      <div class="pb-8">
        <div class="flex space-x-2">
          <img src="@/assets/images/hazini-logo-landscape.svg" />
        </div>
      </div>
      <h1 class="sr-only">Log in to your hazini UI account</h1>
      <slot />

      <footer class="relative shrink-0 mt-6">
        <div
          @click="setAuthViewToDisplay"
          class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4"
        >
          <p class="text-center sm:text-left">
            <span v-if="viewToDisplay === 'REGISTER'">Already registered?</span>
            <span v-else>Don't have an account?</span>
          </p>
          <div
            class="cursor-pointer inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
          >
            <span
              ><span v-if="viewToDisplay === 'REGISTER'">Login</span>
              <span v-else>Register</span>
              <span aria-hidden="true">→</span></span
            >
          </div>
        </div>
      </footer>
    </div>
  </main>
</template>
