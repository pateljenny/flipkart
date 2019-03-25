export const register = (user) => {
    return baseService.post('/register', user);
}