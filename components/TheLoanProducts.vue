<template>
  <div class=" flex justify-start text-xl">
    Loan Products
  </div>
  <br>
  <div class="overflow-x-auto h-[35rem] relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-200">
        <tr class="divide-x divide-gray-300">
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Name</th>
          <th scope="col" class="py-3 px-6">Interest</th>
          <th scope="col" class="py-3 px-6">Duration</th>
          <th scope="col" class="py-3 px-6">Insatllments</th>
          <th scope="col" class="py-3 px-6">Max.Amount</th>
          <th scope="col" class="py-3 px-6">Max.Percent</th>
          <th scope="col" class="py-3 px-6">Transaction Cost</th>
          <th scope="col" class="py-3 px-6">Company</th>
          <th scope="col" class="py-3 px-6">Total Amount</th>
          <th scope="col" class="py-3 px-6">Taken.At</th>
          <th scope="col" class="py-3 px-6">Edit</th>
          <th scope="col" class="py-3 px-6">Disable</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr class="bg-white border-b divide-x hover:bg-teal-50 cursor-pointer">
          <td class="py-4 px-6">1</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>
          <td class="py-4 px-6">branch</td>

          <td class="py-4 px-6">
            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
          </td>
          <td class="py-4 px-6">
            <a href="#" class="font-medium text-blue-600 hover:underline">Diactivate</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
