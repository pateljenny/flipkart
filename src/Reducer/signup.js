const INITIAL_STATE = {
    token: '',
    error: ''
}

export const Signup_SUCCESS = 'Signup_SUCCESS';
export const Signup_FAIL = 'Signup_FAIL';
export const LOGOUT = 'LOGOUT'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Signup_SUCCESS:
            return Object.assign({}, state, { token: action.token });
        case Signup_FAIL:
            return Object.assign({}, state, { error: action.error });
        case LOGOUT:
            return Object.assign({}, state, { token: '', error: '' });
        default: return state;
    }
}
