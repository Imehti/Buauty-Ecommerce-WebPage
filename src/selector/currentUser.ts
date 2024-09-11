import currentUser from "@/atom/currentUser";
import { selector } from "recoil";

const currentUserState=selector({
    key:'currentUserState',
    get:({get})=> {
        const user=get(currentUser)

        return user
    }
})

export default currentUserState