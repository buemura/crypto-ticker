import { useCoinsStore } from "../../stores/coins";
import useFetchCoins from "../../hooks/useFetchCoins";
import CoinsListFetchError from "./components/Error";
import CoinsListLoading from "./components/Loading";
import CoinsListTable from "./components/Table";

export default function CoinsList() {
  const { coins, isLoading } = useFetchCoins();
  const filteredCoins = useCoinsStore((state) => state.filteredCoins);

  if (isLoading) {
    return <CoinsListLoading />;
  }

  if (coins.length === 0) {
    return <CoinsListFetchError />;
  }

  return <CoinsListTable coins={filteredCoins || coins} />;
}
