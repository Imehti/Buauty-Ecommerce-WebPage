import { User } from "firebase/auth";
import { atom } from "recoil";

const currentUser = atom<User | null>({
  key: "currentUser",
  default:
    localStorage.getItem("user")?.trim() !== ""
      ? JSON.parse(localStorage.getItem("user") ?? "")
      : (null as User | null),
});

export default currentUser;
