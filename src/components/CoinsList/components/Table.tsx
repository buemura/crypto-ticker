import { FormattedNumber } from "react-intl";
import { CoinProps } from "../../../types/coin";
import { titles } from "../constants";

type CoinsListTableProps = {
  coins: CoinProps[];
};

export default function CoinsListTable({ coins }: CoinsListTableProps) {
  return (
    <table className="w-full table-auto text-white overflow-x-auto">
      <thead className="text-left">
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {coins?.map((coin) => (
          <tr>
            <td>{coin.market_cap_rank}</td>
            <td className="flex gap-3">
              <img className="w-6 h-6" src={coin.image} alt={coin.name} />
              <span> {coin.name}</span>
            </td>
            <td>
              <FormattedNumber
                value={coin.current_price}
                style="currency"
                currency="USD"
              />
            </td>
            <td>
              <FormattedNumber
                value={coin.total_volume}
                style="currency"
                currency="USD"
              />
            </td>
            <td>
              <FormattedNumber
                value={coin.market_cap}
                style="currency"
                currency="USD"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
