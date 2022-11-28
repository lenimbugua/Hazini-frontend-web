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
    async createUser() {
      try {
        const { data: products } = await useAsyncData("count", () =>
          $fetch("https://hazini.onrender.com/users", {
            body: {
              phone_number: "+254704241274",
              full_name: "Leonard",
              password: "hjjjhhhgg",
            },
            method: "POST",
          })
        );
        console.log(products);
      } catch (error) {
        console.log(error);
      }
    },

    async login(body: LoginCredentials) {
      try {
        this.pending = true;
        let error = "";
        const { data } = await useFetch("/api/auth/login", {
          method: "post",
          body: body,

          async onResponseError({ request, response, options }) {
            if (response.status === 401 || response.status == 400) {
              error = "Invalid phone or password";
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
        this.error = error;
        this.pending = false;

        console.log(data);
        console.log(error);
      } catch (error) {
        this.pending = false;
        console.log(error);
      }
    },
  },
});
