export interface CreateUserParams {
  full_name: string;
  phone_number: string;
  password: string;
}

export async function add(user: CreateUserParams) {
  const createdUser = await $fetch("https://hazini.onrender.com/users", {
    body: user,
    method: "POST",
  });

  return createdUser;
}

export interface LoginCredentials {
  phone_number: string;
  password: string;
}

export async function login(credentials: LoginCredentials) {
  const user = await $fetch("https://hazini.onrender.com/users/login", {
    body: credentials,
    method: "POST",
  });
  return user;
}
