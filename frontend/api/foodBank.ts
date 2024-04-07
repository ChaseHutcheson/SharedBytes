import axios from "axios";
import { API_URL } from "@/constants/Config";

export interface FoodBankSchema {
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: number;
    phone: string;
    cans: number;
    snacks: number;
    beverages: number;
}

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