const INITIAL_STATE = {
    category: [],
    error_msg:''
}

export const GET_CATEGORY = 'GET_CATEGORY';
export const FAILED = 'FAILED';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CATEGORY: {
            return Object.assign({}, state, { category: action.data });
        }
        case FAILED: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
        default:
            return state;
    }
}