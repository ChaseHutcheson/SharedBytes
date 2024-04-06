import axios from "axios";
import { API_URL } from "@/constants/Config";
import validateEmail from "@/utils/validateEmail";

export const signIn = async (email: string, password: string) => {
    const isEmailValid = validateEmail(email)
    if (isEmailValid) {
        try {
            const response = await axios.post(`${API_URL}/login`, {
                "email": email,
                "password": password
            })

            return response.data
        } catch (error) {
            console.log(API_URL)
            console.error(error)
            return error
        }

    } else {
        const errorMsg = {"Error": "Email isn't valid."}
        console.log(errorMsg)
        return errorMsg
    }
}

export const signUp = async (username: string, email: string, password: string) => {
    const isEmailValid = validateEmail(email)
    if (isEmailValid) {
        try {
            const test = axios.create({
                baseURL: `${API_URL}`
            })
            const response = await test.post(`/register`, {
                "email": email,
                "username": username,
                "password": password
            })

            return response.data
        } catch (error) {
            console.log(API_URL, "/register")
            console.error(error)
            return error
        }

    } else {
        const errorMsg = {"Error": "Email isn't valid."}
        console.log(errorMsg)
        return errorMsg
    }
}

export const forgotPassword = async (email: string) => {
    axios.post(`${API_URL}/forgot-password`, {
        "email": email
    })
}