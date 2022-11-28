import { LoginCredentials } from "~/server/src/user";

export interface AuthState {
  viewToDisplay: string;
  pending: boolean;
  error: string;
}
export const useAuthStore = defineStore("auth-store", {
  state: (): AuthState => ({
    viewToDisplay: "LOGIN",
    pending: false,
    error: "",
  }),

  actions: {
    setViewToDisplay(view: string) {
      this.viewToDisplay = view;
    },

    async login(body: LoginCredentials) {
      try {
        this.pending = true;
        let error = "";
        this.error = error;
        const { data } = await useFetch("/api/auth/login", {
          method: "post",
          body: body,

          async onResponseError({ request, response, options }) {
            if (response.status === 401 || response.status == 400) {
              error = "Invalid phone or password";
            }
            if (response.status === 404) {
              error = "User does not exist in our records";
            }
            if (response.status === 500) {
              error = "Internal server error. Contact admin";
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

        console.log(data);
        console.log(error);
      } catch (error) {
        this.pending = false;
        console.log(error);
      }
    },
  },
});
