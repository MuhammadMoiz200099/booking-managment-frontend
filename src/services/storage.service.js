const getUser = () => {
    const user = localStorage.getItem('booking_user')
    return JSON.parse(user);
}

const saveUserToStorage = (user) => {
    if (!user) {
        return;
    }
    localStorage.setItem('booking_user', JSON.stringify(user));
}

const saveTokenToStorage = (token) => {
    if (!token) {
        return;
    }
    localStorage.setItem('booking_accessToken', token);
}

const getToken = () => {
    return localStorage.getItem('booking_accessToken');
}

const clearStorage = () => {
    localStorage.clear();
}

export {
    getUser,
    getToken,
    saveUserToStorage,
    saveTokenToStorage,
    clearStorage
}