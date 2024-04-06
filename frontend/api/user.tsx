import axios from "axios";
import { API_URL } from "@/constants/Config";

export const signIn = (email: string, password: string) => {
    axios.post(`${API_URL}/login`, {
        "email": email,
        "password": password
    })
}

export const signUp = (username: string, email: string, password: string) => {
    axios.post(`${API_URL}/signup`, {
        "email": email,
        "password": password
    })
}

export const forgotPassword = (email: string) => {
    axios.post(`${API_URL}/forgot-password`, {
        "email": email
    })
}
export const deleteAccount = () => {
    axios.post(`${API_URL}/delete-account`,)
}

export const userData = () => {
    axios.get(`${API_URL}/me`)
}