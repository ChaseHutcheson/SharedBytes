import axios from "axios";
import { API_URL } from "@/constants/Config";

export const getFooddBanks = async () => {
    try {
        const response = await axios.get(`${API_URL}/foodbanks/all`)
        console.log("Food Banks retrieved successfully!")
        return response.data
    } catch (error) {
        console.error(error)
        return error
    }
}