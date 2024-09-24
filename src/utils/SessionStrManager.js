 
export const setSessionStorage = (key, value) => {
    try {
        sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error setting session storage:', error);
    }
};
 
export const getSessionStorage = (key) => {
    try {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (error) {
        console.error('Error getting session storage:', error);
        return null;
    }
};

 
export const removeSessionStorage = (key) => {
    try {
        sessionStorage.removeItem(key);
    } catch (error) {
        console.error('Error removing session storage:', error);
    }
};