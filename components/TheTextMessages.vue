<script setup lang="ts">

</script>
<template>
  <div class=" flex justify-start text-xl">
    Text Messages
  </div>
  <br>
  <div class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
        <tr class="divide-x divide-gray-300">
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Sent To</th>
          <th scope="col" class="py-3 px-6">Text</th>
          <th scope="col" class="py-3 px-6">Text ID</th>
          <th scope="col" class="py-3 px-6">Status</th>
          <th scope="col" class="py-3 px-6">Failure Reason</th>
          <th scope="col" class="py-3 px-6">Send At</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer">
          <td class="py-4 px-6"></td>
          <td class="py-4 px-6">test</td>
          <td class="py-4 px-6">test</td>
          <td class="py-4 px-6">test</td>
          <td class="py-4 px-6">test</td>
          <td class="py-4 px-6">test</td>
          <td class="py-4 px-6">test</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
