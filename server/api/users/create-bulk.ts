const runtimeConfig = useRuntimeConfig();
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const createdUser = await fetch("http://localhost/users/bulk", {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${body.accessToken}`,
    },
    body: body.body,
    method: "POST",
  });
  return createdUser;
});
