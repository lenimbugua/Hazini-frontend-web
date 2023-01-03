export interface CreateUserParams {
  username: string;
  full_names: string;
  phone_number: string;
  password: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
