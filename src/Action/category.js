import * as  categoryService from '../Service/category';
import { FAILED, GET_CATEGORY } from '../Reducer/category';

export const getCategory = () => {
    return (dispatch) => {
        //  debugger;
        return categoryService.getCategory()
            .then((response) => {
                console.log(response.data);
              
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




// export const getCetegoryById = (id) => {
//     return (dispatch) => {
//         return categoryService.getCetegoryById(id).then(response => {
//             if (response.status === 200) {
//                 dispatch({
//                     type: types.GET_COURSE_BY_ID_SUCCESS,
//                     course: response.data
//                 })
//             }
//         }).catch(err => {
//             if (err.response) {
//                 dispatch({
//                     type: types.GET_COURSE_BY_ID_FAIL,
//                     error: "Failed"
//                 })
//             }
//         })
//     }
// }


