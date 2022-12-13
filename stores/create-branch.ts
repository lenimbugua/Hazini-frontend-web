import { CreateBranchParams } from "~/server/src/branch";

export interface CreateBranchError {
  hasError: boolean;
  message: string;
  field: string;
}
export interface CreateBranchState {
  pending: boolean;
  error: CreateBranchError;
  responseOK: boolean;
}
export const useCreateBranchStore = defineStore("create-branch-store", {
  state: (): CreateBranchState => ({
    pending: false,
    error: {
      hasError: false,
      message: "",
      field: "",
    },
    responseOK: false,
  }),

  actions: {
    async createBranch(body: CreateBranchParams, accessToken: string) {
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

        const { data } = await useFetch("/api/branch/create", {
          method: "post",
          body: { body, accessToken },

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
