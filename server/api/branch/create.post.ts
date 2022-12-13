const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const branch = await $fetch("/branches", {
    headers: {
      Authorization: `Bearer ${body.accessToken}`,
    },
    body: body.body,
    method: "POST",
    baseURL: runtimeConfig.baseURL,
  });
  return branch;
});
