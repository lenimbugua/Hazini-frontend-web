const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const { pageSize, pageID, accessToken } = getQuery(event);
  const branch = await $fetch("/list/branches", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    query: {
      page_size: pageSize,
      page_id: pageID,
    },
    baseURL: runtimeConfig.baseURL,
  });
  return branch;
});
