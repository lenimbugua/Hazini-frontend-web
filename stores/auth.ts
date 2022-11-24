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
    login() {
      try {
        const { data: products } = useAsyncData(
          async () =>
            await $fetch("https://hazini.onrender.com/users/login", {
              body: {
                phone_number: "+254704241274",
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
  },
});
