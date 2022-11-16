<template>
  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            id
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Price
          </th>
          <th
            scope="col"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Quantity
          </th>
          <th scope="col" class="relative px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">1</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">fhhfgh</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">jfjfjf</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">jhdfhfj</div>
          </td>
          <td
            class="grid grid-cols-3 divide-x divide-blue-500 px-6 py-4 whitespace-nowrap text-center text-sm font-medium"
          >
            <div class="cursor-pointer text-green-500 hover:text-indigo-900">
              View
            </div>
            <div class="cursor-pointer text-indigo-600 hover:text-indigo-900">
              Edit
            </div>
            <div class="text-red-600 hover:text-indigo-900 cursor-pointer">
              Delete
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
