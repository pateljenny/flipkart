const INITIAL_STATE = {
    subcategory: [],
    error_msg:''
}

export const GET_SUBCATEGORY = 'GET_SUBCATEGORY';
export const FAILED = 'FAILED';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUBCATEGORY: {
            return Object.assign({}, state, { subcategory: action.data });
        }
        case FAILED: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
        default:
            return state;
    }
}