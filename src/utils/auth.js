const TokenKey = 'admin-token'

export function setToken(tokenKey){
    return  sessionStorage.setItem(TokenKey, tokenKey);
};
export function getToken(){
    return sessionStorage.getItem(TokenKey);
};
export function removeToken(){
    return sessionStorage.removeItem(TokenKey);
}