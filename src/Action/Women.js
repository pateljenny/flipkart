import * as  womencategoryService from '../Service/Women';
import { FAILED, GET_WOMENCATEGORY } from '../Reducer/Women';

export const getWomenCategory= () => {
    return (dispatch) => {
        //  debugger;
        return womencategoryService.getWomenCategory()
            .then((response) => {
                console.log(response.data);
              
                if (response.status === 200) {
                    dispatch({
                        type: GET_WOMENCATEGORY,
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







