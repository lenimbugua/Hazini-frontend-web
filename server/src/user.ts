export interface CreateUserParams {
  full_name: string;
  phone_number: string;
  password: string;
}

export interface LoginCredentials {
  phone_number: string;
  password: string;
}
