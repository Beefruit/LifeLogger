"use client";

import useSearchStore from "@/store/search.store";
import { useEffect, useState } from "react";
import { TCategory } from "@/types";

interface IUseSearchBarReturn {
  searchState: {
    searchInput: string;
    category: TCategory | "all";
    rating: string;
    createdAt: string;
  };
  onChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: ({ value }: { value: TCategory | string }) => void;
  onChangeRating: ({ value }: { value: string }) => void;
  onChangeCreatedAt: ({ value }: { value: string }) => void;
}

const useSearchBar = (): IUseSearchBarReturn => {
  const { searchState, setSearchInput, setCategory, setRating, setCreatedAt } =
    useSearchStore();

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const onChangeCategory = ({ value }: { value: TCategory | string }) => {
    setCategory(value as TCategory);
  };

  const onChangeRating = ({ value }: { value: string }) => {
    setRating(value as string);
  };

  const onChangeCreatedAt = ({ value }: { value: string }) => {
    setCreatedAt(value as string);
  };

  return {
    searchState,
    onChangeSearchInput,
    onChangeCategory,
    onChangeRating,
    onChangeCreatedAt,
  };
};

export default useSearchBar;
