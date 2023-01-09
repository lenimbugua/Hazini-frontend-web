<script setup lang="ts">
const test = ref();

const permissions = async () => {
    console.log(test);


}

</script>
<template>
    <div class=" flex justify-start text-xl text-black">
        Permissions
    </div>
    <br>
    <div class="flex justify-start">
        <form class="mb-3 w-full">
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="search" id="default-search"
                    class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-teal-700 focus:ring-teal-500 focus:border-0"
                    placeholder="Search users..." required />
                <button type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-2 py-1">
                    Search
                </button>
            </div>
        </form>
    </div>
    <br>
    <div class=" flex justify-end">
        <form class="mb-3 w-1/3">
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-balck">
                Roles</label>
            <select id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-teal-700 focus:ring-teal-500 block w-full p-2.5 ">
                <option>Select Roles</option>
                <option>Admin</option>
                <option>Manager</option>
                <option>Employer</option>
                <option>Customer</option>
            </select>
        </form>
    </div>
    <br>

    <div class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
                <tr class="divide-x divide-gray-300">
                    <th scope="col" class="py-3 px-6"></th>
                    <th scope="col" class="py-3 px-6">Name</th>
                    <th scope="col" class="py-3 px-6">Phone Number</th>
                    <th scope="col" class="py-3 px-6">Permissions</th>
                </tr>
            </thead>
            <tbody class="divide-y">
                <tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer">
                    <td class="py-4 px-6"></td>
                    <td class="py-4 px-6">test</td>
                    <td class="py-4 px-6">test</td>
                    <td class="py-4 px-6">test</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>