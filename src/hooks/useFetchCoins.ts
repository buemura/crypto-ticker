import { useEffect, useState } from "react";
import { getMarketData } from "../services/http/coins";
import { useCoinsStore } from "../stores/coins";

export default function useFetchCoins() {
  const [isLoading, setIsLoading] = useState(false);

  const coins = useCoinsStore((state) => state.coins);
  const setCoins = useCoinsStore((state) => state.setCoins);

  const fetchCoins = async () => {
    setIsLoading(true);
    const result = await getMarketData();

    console.log(result);

    setIsLoading(false);
    setCoins(result);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return { coins, isLoading };
}
