<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import { UserIcon } from "@heroicons/vue/20/solid";
import { IdentificationIcon } from "@heroicons/vue/20/solid";
import { useAuthStore } from "../stores/login";

const { user } = storeToRefs(useAuthStore());

const solutions = [
  {
    name: "Profile ",
    href: "##",
    icon: `<IdentificationIcon/>`,
  },
  {
    name: "Change Password",
    href: "##",
    icon: `
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="8" fill="#37899A" />
          <path
            d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
            stroke="#FB923C"
            stroke-width="2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
            stroke="#FDBA74"
            stroke-width="2"
          />
        </svg>
      `,
  },
];
</script>

<template>
  <div class="fixed top-0 right-2">
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        :class="open ? '' : 'text-opacity-90'"
        class="group inline-flex items-center rounded-md px-3 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <UserIcon class="mr-2 h-5 w-5 text-gray-700" />
        <span>Hi {{ user.user.full_name }}</span>
        <ChevronDownIcon
          :class="open ? '' : 'text-opacity-70'"
          class="ml-2 h-5 w-5 text-[#37899A] transition duration-150 ease-in-out group-hover:text-opacity-80"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-240"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-240"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute shadow-xl right-0 z-50 mt-3 w-64 max-w-sm transform px-3 sm:px-0"
        >
          <div
            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="relative grid gap-8 bg-white p-3">
              <a
                v-for="item in solutions"
                :key="item.name"
                :href="item.href"
                class="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <div
                  class="flex h-24 w-24 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div v-html="item.icon"></div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                </div>
              </a>
            </div>
            <div class="bg-gray-50 p-4">
              <a
                href="##"
                class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-240 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-gray-900">
                    Log Out
                  </span>
                </span>
                <span class="block text-sm text-gray-500">
                  Sign out from your account
                </span>
              </a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
