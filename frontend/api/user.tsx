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