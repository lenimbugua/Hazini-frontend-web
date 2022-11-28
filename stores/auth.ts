import { LoginCredentials } from "~/server/src/user";
import { CreateUserParams } from "~/server/src/user";

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
    async createUser(body: CreateUserParams) {
      try {
        this.pending = true;
        const { data, error } = await useFetch("/api/auth/create", {
          method: "post",
          body: body,

          async onResponseError({ request, response, options }) {
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
        console.log(data);
        console.log(error);
      } catch (err) {
        this.pending = false;
        console.log(err);
      }
    },
    // async createUser() {
    //   try {

    //     const { data: products } = await useAsyncData("count", () =>
    //       $fetch("https://hazini.onrender.com/users", {
    //         body: {
    //           phone_number: "+254704241274",
    //           full_name: "Leonard",
    //           password: "hjjjhhhgg",
    //         },
    //         method: "POST",
    //       })
    //     );
    //     console.log(products);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

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
            if (response.status === 404) {
              error = "User does not exist in our records";
            }
            if (response.status === 500) {
              error = "Internal server error";
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
