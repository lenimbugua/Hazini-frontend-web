<script setup lang="ts"></script>
<template>
  <div class="relative px-4 py-3">
    <div class="text-sm text-[#2C7075] mb-3">Reports</div>
    <div class="flex gap-6 overflow-scroll">
      <div
        class="col shadow-md rounded-md w-full py-1 px-2 bg-white-700 text-black"
      >
        <div>
          <svg width="32" height="32" viewBox="0 0 16 16">
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M14.5 2H9l-.35.15-.65.64-.65-.64L7 2H1.5l-.5.5v10l.5.5h5.29l.86.85h.7l.86-.85h5.29l.5-.5v-10l-.5-.5zm-7 10.32-.18-.17L7 12H2V3h4.79l.74.74-.03 8.58zM14 12H9l-.35.15-.14.13V3.7l.7-.7H14v9zM6 5H3v1h3V5zm0 4H3v1h3V9zM3 7h3v1H3V7zm10-2h-3v1h3V5zm-3 2h3v1h-3V7zm0 2h3v1h-3V9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="text-sm font-medium">Registered Companies</div>
      </div>
      <div
        class="col shadow-md rounded-md w-full py-1 px-2 bg-white-700 text-black"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z"
            />
          </svg>
        </div>
        <div class="text-sm font-medium">Registered Employees</div>
      </div>
      <div
        class="col shadow-md rounded-md w-full py-1 px-2 bg-white-700 text-black"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
        </div>
        <div class="text-sm font-medium">Loans Disbursed</div>
      </div>
      <div
        class="col shadow-md rounded-md w-full py-2 px-2 bg-white-700 text-black"
      >
        <div class="text-sm font-medium font-gotham">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
            />
          </svg>
        </div>
        <div class="text-sm">Amount Disbursed</div>
      </div>
      <div
        class="col shadow-md rounded-md w-full py-2 px-2 bg-white-700 text-black"
      >
        <div class="text-sm font-medium font-gotham">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5z"
            />
          </svg>
        </div>
        <div class="text-sm">Failed Loans</div>
      </div>

      <div
        class="col shadow-md rounded-md w-full py-2 px-2 bg-white-700 text-black"
      >
        <div class="text-sm font-small font-gotham"></div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            />
          </svg>
        </div>
        <div class="text-sm">Total collections</div>
      </div>
    </div>
    <div
      class="grid grid-cols-3 mt-6 shadow-md border overflow-hidden bg-white"
    >
      <div class="col-span-2 bg-white rounded-md py-3 px-4">
        <div class="text-md text-[#2C7075] font-medium font-gotham">Loans</div>
        <canvas id="myChart" width="500" height="250"></canvas>
      </div>
    </div>
    <div
      class="flex justify-start w-1/4 mt-6 shadow-md border overflow-hidden bg-white"
    >
      <div class="col-span-2 bg-white rounded-md py-2 px-2">
        <div class="text-md text-[#2C7075] font-medium font-gotham">Loans</div>
        <canvas id="myChart" width="100" height="100"></canvas>
      </div>
    </div>
  </div>
</template>
