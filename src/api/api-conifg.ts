import axios from "axios";

export const pizzetonApi = axios.create({
    baseURL: 'https://military-gianna-pizzetondguti-6a3d8d19.koyeb.app/api'
})