<template>
  <div class="flex h-screen overflow-scroll">
    <div class="w-1/6 h-full overflow-scroll bg-[#2C7075] shadow-md">
      <TheSidebar />
    </div>
    <div class="w-5/6 relative">
      <TheNavbar />
      <TheMain>
        <template #title> <slot name="title" /></template>
        <template #main> <slot /></template>
      </TheMain>
      <TheFooter class="absolute bottom-0" />
    </div>
  </div>
</template>
