
export const setLocalStorage = (key, data) => {
     
    if (typeof data === 'object') {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        console.error('Veri bir nesne olmalıdır.');
    }
};


export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key); 
    return data ? JSON.parse(data) : null;
};


export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};


export const clearLocalStorage = () => {
    localStorage.clear();
};