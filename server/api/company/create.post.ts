const runtimeConfig = useRuntimeConfig();

export default defineEventHandler(async (event) => {
 

  const body = await readBody(event);
  
  const company = await $fetch("/companies", {
    headers: {
      Authorization: `Bearer ${body.accessToken}`,
    },
    body:body.body,
    method: "POST",
    baseURL: runtimeConfig.baseURL,
  });
  return company;
});
