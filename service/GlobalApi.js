import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

// Normalize the base URL to prevent double slashes
const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, "");

const axiosClient = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

const createContactEntry = (formData) => {
    return axiosClient.post('/contact-details', {
        data: formData
    });
};

const createAppointment_Entry = (formData) => {
    return axiosClient.post('/book-appointments', {
        data: formData
    });
};

export default {
    createContactEntry,
    createAppointment_Entry
};