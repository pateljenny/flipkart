import baseService from './baseService';

export function getWomenCategory() {
    return baseService.get('/women');
}