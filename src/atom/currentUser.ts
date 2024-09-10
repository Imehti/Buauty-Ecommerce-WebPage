import { atom } from "recoil";

export interface User{
    accessToken:string,
    email:string,
    uid:string,
    stsTokenManager:{expirationTime:number,refreshToken:string},
    reloadUserInfo:{createdAt:string,lastLoginAt:string,passwordHash:string}
}

const currentUser=atom({
    key:'userState',
    default:{}
})

export default currentUser