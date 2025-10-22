import { useMemo } from "react";

/**
 * Converts pounds to grams.
 * 
 * @param pounds Weight in pounds.
 * 
 * @returns Weight in grams.
 */
export function usePoundsToGrams(pounds: number) {
  return useMemo(() => (pounds * 454), [pounds])
}

/**
 * Converts grams to pounds.
 * 
 * @param grams Weight in grams.
 * 
 * @returns Weight in pounds.
 */
export function useGramsToPounds(grams: number) {
  return useMemo(() => (grams / 454).toFixed(1), [grams])
}
