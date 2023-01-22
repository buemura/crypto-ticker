import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import { CoinProps } from "../types/coin";

type State = {
  coins: CoinProps[] | [];
  filteredCoins: CoinProps[] | [];
  setCoins: (coins: CoinProps[]) => void;
  setSearchCoin: (value: string) => void;
};

export const useCoinsStore = create<State>()(
  devtools(
    persist(
      (set) => ({
        coins: [],
        filteredCoins: [],
        setCoins: (coins: CoinProps[]) => {
          set(() => ({ coins: coins }));
        },
        setSearchCoin: (searchValue: string) => {
          set((state) => {
            const filtered = state.coins.filter((coin) =>
              coin.id.includes(searchValue.toLowerCase())
            );

            return { filteredCoins: filtered };
          });
        },
      }),
      {
        name: "coins-storage",
        getStorage: () => localStorage,
      }
    )
  )
);
