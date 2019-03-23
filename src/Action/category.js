import * as categoryService from '../Service/category';
import { FAILED, GET_CATEGORY } from '../Reducer/category';

export const getCategory = () => {
    return (dispatch) => {
        categoryService.getCategory()
            .then((response) => {
                if (response.status === 200) {
                    dispatch({
                        type: GET_CATEGORY,
                        data: response.data
                    });
                }
            })
            .catch((error) => {
                if (error) {
                    dispatch({
                        type: FAILED,
                        data: { error_msg: error.response.data.error }
                    });
                }
            });
    }
};


