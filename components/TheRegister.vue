<template>
  <form @submit.prevent="" class="w-full max-w-sm">
    <div class="mb-6">
      <label
        for="full_names"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Full Names</label
      ><input
        type="text"
        name="full_names"
        id="full_names"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="phone"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Phone Number</label
      ><input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="password"
        class="block text-sm font-semibold leading-6 text-gray-900"
        >Password</label
      ><input
        type="password"
        name="password"
        id="password"
        class="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#37899A] ring-1 ring-slate-200"
        aria-required
        required
      />
    </div>
    <button
      type="submit"
      class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-sky-50 bg-[#37899A] hover:text-sky-50/80 hover:bg-teal-700 w-full"
    >
      <span>Sign in to account</span>
    </button>
  </form>
</template>
