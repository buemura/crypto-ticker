import axios from "axios";

const baseURL = "https://api.coingecko.com/api/v3";

export const api = axios.create({ baseURL });
