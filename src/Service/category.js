import baseService from './baseService';

export function category() {
    return baseService.get('/api/category/');
}

export function Getcategory() {
    return baseService.get('/api/category');
}
