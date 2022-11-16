<template>
  <div class="bg-gray-50 px-4">
    <div class="py-3 mt-1 font-semibold text-lg text-gray-500 tracking-wider">
      <slot name="title" />
    </div>
    <section>
      <slot name="main"></slot>
    </section>
  </div>
</template>
