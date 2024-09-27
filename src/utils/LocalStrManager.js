// LocalStorage set
export const setLocalStorage = (key, data) => {
    if (typeof data === 'object' || typeof data === 'boolean') {
        localStorage.setItem(key, JSON.stringify(data));
    } else {
        console.error('Veri bir nesne ya da boolean olmalıdır.');
    }
};

// LocalStorage get
export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key); 
    return data ? JSON.parse(data) : null;
};

// LocalStorage remove
export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};

// LocalStorage clear
export const clearLocalStorage = () => {
    localStorage.clear();
};
