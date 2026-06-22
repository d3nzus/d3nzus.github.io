import { useState } from "react";
import { getCurrent } from "../content/Projects.ts";

export function useCurrCount() {
  const [curr_count, setCurrCount] = useState(0);

  function getCurrCount() {
    return curr_count;
  }

  function nextCurrCount() {
    setCurrCount((prev) => (prev + 1) % getCurrent().length);
  }

  function prevCurrCount() {
    setCurrCount((prev) => (prev - 1 + getCurrent().length) % getCurrent().length);
  }

  return { getCurrCount, nextCurrCount, prevCurrCount };
}