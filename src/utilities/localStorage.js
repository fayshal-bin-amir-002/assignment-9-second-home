import { toast } from 'react-toastify';

export const getLocalData = () => {
    const storedData = localStorage.getItem('booking');

    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

export const saveToLocal = (item) => {
    const storedData = getLocalData();
    const isExist = storedData.find((sd) => sd.id === parseInt(item.id));
    if (!isExist) {
        storedData.push(item);
        localStorage.setItem('booking', JSON.stringify(storedData));
        toast.success("Successfully added in booking");
    }
    else {
        toast.error("Already added in booking");
    }
}