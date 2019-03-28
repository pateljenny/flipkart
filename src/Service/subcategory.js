import baseService from './baseService';

export function getSubCategory() {
    return baseService.get('/category');
}

