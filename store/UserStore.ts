import { Store } from "@tanstack/store";
import { useStore } from "@tanstack/react-store";

interface TAuthState {
  user: any | null;
  // setUser: (user: any) => void;
  token: string | null;
  isAuthenticated: boolean;
}

const InitialAuth = {
  isAuthenticated: false,
  user: null,
  token: null,
};
export const authStore = new Store<TAuthState>(InitialAuth);

export const subAuthStore = authStore.subscribe(({ currentVal, prevVal }) => {
  console.log({ currentVal, prevVal });
});

export const updateAuthStoree = (update: Partial<TAuthState>) => {
  return authStore.setState((prev) => ({ ...prev, ...update }));
};

export const clearAuthStore = () => {
  return authStore.setState(InitialAuth);
};
export const useAuthStore = () => useStore(authStore);

// authStore.subscribe((state) => {
//   const { currentVal } = state;

//   if (currentVal.user) {
//     AuthTokenService.setAccessToken(
//       JSON.stringify(currentVal.user),
//       "auth_user"
//     );
//   } else {
//     localStorage.removeItem("auth_user");
//   }
// });
// console.log(UserStore.state); // 0
// UserStore.setState(() => 1);
// console.log(UserStore.state); // 1
