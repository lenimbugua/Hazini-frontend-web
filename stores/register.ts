import { CreateUserParams } from "~/server/src/user";

export interface CreateUserError {
  hasError: boolean;
  message: string;
  field: string;
}
export interface CreateUserState {
  pending: boolean;
  error: CreateUserError;
  responseOK: boolean;
}
export const useCreateUserStore = defineStore("create-user-store", {
  state: (): CreateUserState => ({
    pending: false,
    error: {
      hasError: false,
      message: "",
      field: "",
    },
    responseOK: false,
  }),

  actions: {
    async createUser(body: CreateUserParams) {
      try {
        this.pending = true;
        let error = {
          hasError: false,
          message: "",
          field: "",
        };
        this.error = error;
        let responseOK = false;
        this.responseOK = responseOK;
        const { data } = await useFetch("/api/users/create", {
          method: "post",
          body: body,

          async onResponse({ request, response, options }) {
            console.log(response);
            console.log(response.ok);
            // Process the response data
            if (response.ok) {
              responseOK = true;
            }
          },

          async onResponseError({ request, response, options }) {
            if (response.status == 400) {
              error = {
                hasError: true,
                message: "Invalid phone or password",
                field: "none",
              };
            }
            if (response.status === 403) {
              error = {
                hasError: true,
                message: "Phone number already taken",
                field: "phone_number",
              };
            }
            if (response.status === 500) {
              error = {
                hasError: true,
                message: "Internal server error",
                field: "none",
              };
            }
            // Log error
            console.log(
              "[fetch response error]",
              request,
              response.status,
              response.body
            );
          },
        });
        this.pending = false;
        this.error = error;
        this.responseOK = responseOK;
        console.log(data);
        console.log(error);
      } catch (err) {
        this.pending = false;
        console.log(err);
      }
    },
  },
});
