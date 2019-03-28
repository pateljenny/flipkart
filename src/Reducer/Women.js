const INITIAL_STATE = {
    womencategory: [],
    error_msg:''
}

export const GET_WOMENCATEGORY = 'GET_WOMENCATEGORY ';
export const FAILED = 'FAILED';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_WOMENCATEGORY : {
            return Object.assign({}, state, { category: action.data });
        }
        case FAILED: {
            return Object.assign({}, state, { error_msg: action.data.error_msg });
        }
        default:
            return state;
    }
}