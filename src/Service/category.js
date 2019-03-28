import baseService from './baseService';

export function getCategory() {
    return baseService.get('/electronics');
}

// export function Getcategory() {
//     return baseService.get('/api/category');
// }
