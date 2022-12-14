import axios from "axios";

export interface Data {
  total_failed: number;
  total_inserted: number;
  total_records: number;
}
export interface Errors {
  cell: string;
  column: string;
  description: string;
  row: number;
}

export interface Results {
  errors: Errors[];
  results: Data;
}

export interface CreateUsersState {
  pending: boolean;
  error: string;
  responseOK: boolean;
  results: Results | null;
}
export const useCreateUsersBulkStore = defineStore("create-users-bulk-store", {
  state: (): CreateUsersState => ({
    pending: false,
    error: "",
    responseOK: false,
    results: null,
  }),

  actions: {
    async createUsersBulk(body, accessToken: string) {
      try {
        this.pending = true;
        this.results = null;
        const { data } = await axios({
          method: "post",
          url: "https://hazini.onrender.com/users/bulk",
          data: body,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        this.pending = false;
        console.log(data);
        this.results = data;
        console.log(this.results);
      } catch (error) {
        this.pending = false;
        console.log(error);
        if (error.response.status === 400) {
          this.error = "The file provided is not a valid excel file";
        }
      }
    },
  },
});
