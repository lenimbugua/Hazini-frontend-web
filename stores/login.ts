import { LoginCredentials } from "~/server/src/user";
import { defineStore, skipHydrate } from "pinia";

import { RemovableRef, useStorage } from "@vueuse/core";

let user = {
  access_token: "",
  access_token_expires_at: "",
  refresh_token: "",
  refresh_token_expires_at: "",
  session_id: "",
  user: {
    created_at: "",
    full_name: "",
    password_changed_at: "",
    phone_number: "",
    updated_at: "",
  },
};

export interface User {
  access_token: string;
  access_token_expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  session_id: string;
  user: {
    created_at: string;
    full_name: string;
    password_changed_at: string;
    phone_number: string;
    updated_at: string;
  };
}
export interface AuthState {
  viewToDisplay: string;
  pending: boolean;
  error: string;
  user: RemovableRef<User>;
  responseOK: boolean;
}
export const useAuthStore = defineStore("auth-store", {
  state: (): AuthState => ({
    viewToDisplay: "LOGIN",
    pending: false,
    error: "",
    user: useStorage("user", user),
    responseOK: false,
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
        let responseOK = false;
        const { data } = await useFetch("/api/auth/login", {
          method: "post",
          body: body,

          async onResponse({ request, response, options }) {
            console.log(response);
            console.log(response.ok);
            // Process the response data
            if (response.ok) {
              responseOK = true;
              user = response._data;
            }
          },

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
        this.user = user;
        this.responseOK = responseOK;
        console.log(data);
        console.log(error);
      } catch (error) {
        this.pending = false;
        console.log(error);
      }
    },
  },
  hydrate(state, initialState) {
    // in this case we can completely ignore the initial state since we
    // want to read the value from the browser
    state.user = useStorage("user", user);
  },
});
