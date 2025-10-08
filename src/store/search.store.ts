import { create } from "zustand";
import { TCategory } from "@/types";

interface ISearchState {
  searchInput: string;
  category: TCategory | "all";
  rating: string;
  createdAt: string;
}

interface IsearchStore {
  searchState: ISearchState;
  setSearchInput: (input: string) => void;
  setCategory: (category: TCategory) => void;
  setRating: (rating: string) => void;
  setCreatedAt: (createdAt: string) => void;
}

const useSearchStore = create<IsearchStore>((set) => ({
  searchState: {
    searchInput: "",
    category: "all",
    rating: "all",
    createdAt: "all",
  },
  setSearchInput: (input: string) =>
    set((state) => ({
      searchState: {
        ...state.searchState,
        searchInput: input,
      },
    })),
  setCategory: (category: TCategory | "all") =>
    set((state) => ({
      searchState: {
        ...state.searchState,
        category,
      },
    })),
  setRating: (rating: string) =>
    set((state) => ({
      searchState: {
        ...state.searchState,
        rating,
      },
    })),
  setCreatedAt: (createdAt: string) =>
    set((state) => ({
      searchState: {
        ...state.searchState,
        createdAt,
      },
    })),
}));

export default useSearchStore;
