import axios from "axios";

export const pizzetonApi = axios.create({
    // : 'https://military-gianna-pizzetondguti-6a3d8d19.koyeb.app/api',
    baseURL: 'http://localhost:4000/api'
})