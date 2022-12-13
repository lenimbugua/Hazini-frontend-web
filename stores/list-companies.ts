import { ListCompaniesParams } from "~~/server/src/company";

export const useListCompaniesStore = defineStore("list-companies-store", {
  state: () => ({
    companies: [],
  }),

  actions: {
    async listCompanies(body: ListCompaniesParams, accessToken: string) {
      try {
        const { data } = await useFetch("/api/company/list", {
          method: "post",
          body: body,

          async onResponse({ request, response, options }) {
            console.log(response);
            console.log(response.ok);
            // Process the response data
            if (response.ok) {
                this.companies = response._data
            }
          },

          async onResponseError({ request, response, options }) {
            if (response.status == 400) {
            }
            if (response.status === 403) {
            }
            if (response.status === 500) {
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
      } catch (error) {
        console.log(error);
      }
    },
  },
});
