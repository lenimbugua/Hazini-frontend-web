export interface AuthState {
  viewToDisplay: string;
}
export const useAuthStore = defineStore("auth-store", {
  state: (): AuthState => ({
    viewToDisplay: "LOGIN",
  }),

  actions: {
    setViewToDisplay(view: string) {
      this.viewToDisplay = view;
    },
  },
});
