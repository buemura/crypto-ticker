import { BiRefresh } from "react-icons/bi";

export default function RefreshButton() {
  return (
    <button
      className="bg-blue-500 p-1 rounded-md"
      onClick={() => {
        window.location.reload();
      }}
    >
      <BiRefresh className="text-white text-2xl" />
    </button>
  );
}
