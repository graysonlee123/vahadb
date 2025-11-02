import { useMemo } from "react";

/**
 * Converts pounds to grams.
 * 
 * Will return decimal numbers.
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
 * Will return a string representaion of pounds rounded to 1 decimal place.
 * 
 * @param grams Weight in grams.
 * 
 * @returns Weight in pounds.
 */
export function useGramsToPounds(grams: number) {
  return useMemo(() => (grams / 454).toFixed(1), [grams])
}
