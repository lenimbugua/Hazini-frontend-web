import * as User from "~/server/src/user";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return User.add(body);
});
