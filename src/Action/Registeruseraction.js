import {Register} from '../Service/baseService';
import { Signup_SUCCESS, Signup_FAIL, LOGOUT} from '../Reducer/signup';


export const RegisterAction = (user) => {
    return (dispatch) => {
        return Register(user).then(response => {
            
            if (response.status === 200) {
               
                localStorage.setItem('token', response.data.token);
                dispatch({ type: Signup_SUCCESS, token: response.data.token })
            }
        }).catch(error => {
            if (error.response) {
                dispatch({ type: Signup_FAIL, error: error.response.data.error })
            }
        })
    }
}
