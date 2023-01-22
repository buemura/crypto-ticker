import { api } from "./api";

export async function getMarketData() {
  try {
    const baseCurrency = "usd";
    const order = "market_cap_desc";
    const items = 250;
    const page = 1;
    const sparkline = false;

    const { data } = await api.get(
      `/coins/markets?vs_currency=${baseCurrency}&order=${order}&per_page=${items}&page=${page}&sparkline=${sparkline}`
    );

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
