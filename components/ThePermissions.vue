<script setup lang="ts">
const permissions = async () => {

}

</script>
<template>
    <div class=" flex justify-start text-xl">
        Roles
    </div>
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
                    <th scope="col" class="py-3 px-6">Role</th>
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