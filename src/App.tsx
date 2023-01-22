import CoinsList from "./components/CoinsList";
import RefreshButton from "./components/RefreshButton";
import SearchCoin from "./components/SearchCoin";

export default function App() {
  return (
    <div className="flex flex-col justify-center gap-4 p-10 bg-neutral-900">
      <div className="flex items-center gap-2">
        <SearchCoin />
        <RefreshButton />
      </div>
      <CoinsList />
    </div>
  );
}
