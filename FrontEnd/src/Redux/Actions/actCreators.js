import REGISTER_USER from "./actionTypes";

export const registerUserAction=(name,mail,pass,login)=>{
    return {
        type:REGISTER_USER,
        uname:name,
        umail:mail,
        upass:pass,
        log:login
    }
};