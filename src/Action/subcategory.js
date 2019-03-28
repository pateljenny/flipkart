import * as  subcategoryService from '../Service/subcategory';
import { FAILED, GET_SUBCATEGORY } from '../Reducer/subcategory';

export const getSubCategory = () => {
    return (dispatch) => {

    subcategoryService.getSubCategory()

            .then((response) => {
                console.log(response.data);
              
                if (response.status === 200) {

                    dispatch({

                        type: GET_SUBCATEGORY,
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







