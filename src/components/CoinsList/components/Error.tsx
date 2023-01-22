import { BiRefresh } from "react-icons/bi";
import RefreshButton from "../../RefreshButton";

export default function CoinsListFetchError() {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-white text-2xl">
        Error fetching coins. Please try to refresh the page
      </h1>

      <RefreshButton />
    </div>
  );
}
