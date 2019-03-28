import baseService from './baseService';

export function getCategory() {
    return baseService.get('/category');
}

// export function Getcategory() {
//     return baseService.get('/api/category');
// }
