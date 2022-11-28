<script setup lang="ts">
import { useAuthStore } from "../stores/login";
const { viewToDisplay } = storeToRefs(useAuthStore());
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <TheLogin v-if="viewToDisplay === 'LOGIN'" />
  <TheRegister v-else />
</template>
