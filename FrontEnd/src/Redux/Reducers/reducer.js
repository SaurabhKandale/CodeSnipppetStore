import initialstate from "../State/state";
import REGISTER_USER from "../Actions/actionTypes";

export const reducer=(state=initialstate,action)=>{
    switch (action.type){
        case REGISTER_USER: return {
            user_name:action.uname,
            user_mail:action.umail,
            user_pass:action.upass,
            isLogged:action.log
        }

        default :  return state;
    }

};