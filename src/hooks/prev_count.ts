import { useState } from "react";
import { getPrevious } from "../content/Projects.ts";

export function usePrevCount() {
  const [prev_count, setPrevCount] = useState(0);

  function getPrevCount() {
    return prev_count;
  }

  function nextPrevCount() {
    setPrevCount((prev) => (prev + 1) % getPrevious().length);
  }

  function prevPrevCount() {
    setPrevCount((prev) => (prev - 1 + getPrevious().length) % getPrevious().length);
  }

  return { getPrevCount, nextPrevCount, prevPrevCount };
}