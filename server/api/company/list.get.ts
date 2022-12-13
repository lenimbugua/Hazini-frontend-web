const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const { pageSize, pageID, accessToken } = getQuery(event);
  const company = await $fetch("/list/companies", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    query: {
      page_size: pageSize,
      page_id: pageID,
    },
    baseURL: runtimeConfig.baseURL,
  });
  return company;
});
