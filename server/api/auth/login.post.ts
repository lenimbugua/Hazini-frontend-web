import * as User from "~/server/src/user";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  //const user = await User.login(body);
  const user = await $fetch("https://hazini.onrender.com/users/login", {
    body,
    method: "POST",
  });
  return user;
});
