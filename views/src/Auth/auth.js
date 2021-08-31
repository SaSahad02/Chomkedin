import Cookies from 'js-cookie';

const setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 1 });
};

const getCookie = (key) => {
    return Cookies.get(key);
};

const deleteCookie = (key) => {
    Cookies.remove(key);
};

export const setAuthentication = (token) => {
    setCookie('token', token);
};

export const isAuthenticated = () => {
    if (getCookie('token') ) {
        const isLoggedIn = getCookie('token')
        return isLoggedIn ;
    } else {
        return false;
    }
};

export const logout = () => {
    deleteCookie('token');
    
};