import axios from "axios";

export const clientApi = axios.create({
    baseURL: 'https://api.tcgdex.net/v2/en/',
})