const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const user = await $fetch("/users/login", {
    body,
    method: "POST",
    baseURL: runtimeConfig.baseURL,
  });
  return user;
});
