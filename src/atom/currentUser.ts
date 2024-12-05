import { atom } from "recoil";
import { User } from "firebase/auth";

// Recoil state for current user
const currentUser = atom<User | null>({
  key: "currentUser",
  default: (() => {
    const userString = localStorage.getItem("user");
    if (userString) {
      try {
        return JSON.parse(userString) as User;
      } catch (error) {
        console.error("Error parsing user from local storage:", error);
        return null;
      }
    } else {
      return null;
    }
  })(),
});

// Reset state when user logs out
export const resetUserState = () => {
  localStorage.removeItem("user");
  return null;
};

export default currentUser;
