const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const createdUser = await $fetch("/users/bulk", {
    body: body,
    method: "POST",
    baseURL: runtimeConfig.baseURL,
  });
  return createdUser;
});
