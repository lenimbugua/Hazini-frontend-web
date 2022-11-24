<script setup lang="ts">
import { useAuthStore } from "../stores/auth";
const { viewToDisplay } = storeToRefs(useAuthStore());
definePageMeta({
  layout: "auth",
});
</script>
<template>
  <TheLogin v-if="viewToDisplay === 'LOGIN'" />
  <TheRegister v-else />
</template>
