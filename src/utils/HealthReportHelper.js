import { setLocalStorage, getLocalStorage, removeLocalStorage } from './LocalStrManager';
import { v4 as uuidv4 } from 'uuid';  // Use UUID library to generate unique IDs

const STORAGE_KEY = 'healthReportData';

export const addHealthReport = (report) => {
    if (!report || typeof report !== 'object') {
        console.error('Eklenecek veri bir nesne olmalıdır.');
        return;
    }

    const currentData = getLocalStorage(STORAGE_KEY) || [];

    report.id = uuidv4();

    currentData.push(report);
    setLocalStorage(STORAGE_KEY, currentData);
};

export const removeHealthReport = (id) => {
    const currentData = getLocalStorage(STORAGE_KEY) || [];

    const index = currentData.findIndex(report => report.id === id);

    if (index === -1) {
        console.error('Geçersiz ID.');
        return;
    }

    currentData.splice(index, 1);
    setLocalStorage(STORAGE_KEY, currentData);
};

export const getAllHealthReports = () => {
    return getLocalStorage(STORAGE_KEY) || [];
};
