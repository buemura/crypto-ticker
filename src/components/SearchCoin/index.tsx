import { useCoinsStore } from "../../stores/coins";

export default function SearchCoin() {
  const setSearchCoin = useCoinsStore((state) => state.setSearchCoin);

  return (
    <input
      className="bg-neutral-700 text-white outline-none p-1 pl-2"
      type="text"
      placeholder="Search"
      onChange={(e) => setSearchCoin(e.target.value)}
    />
  );
}
