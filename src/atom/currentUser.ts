import { User } from "firebase/auth";
import { atom } from "recoil";

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
  })() as User | null,
});

export default currentUser;