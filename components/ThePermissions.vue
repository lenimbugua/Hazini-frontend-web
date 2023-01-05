<script setup lang="ts">
const permissions = async () => {

}

</script>
<template>
    <div class=" flex justify-start text-xl">
        Roles
    </div>
    <br>


    <div class=" flex justify-start">
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
        <button>
            Create
        </button>
    </div>
</template>