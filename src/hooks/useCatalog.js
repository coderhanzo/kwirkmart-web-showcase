import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories, fetchSubcategories } from "@/lib/api";

const HOUR = 1000 * 60 * 60;

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: HOUR,
    gcTime: 2 * HOUR,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: HOUR,
    gcTime: 2 * HOUR,
  });
}

export function useSubcategories() {
  return useQuery({
    queryKey: ["subcategories"],
    queryFn: fetchSubcategories,
    staleTime: HOUR,
    gcTime: 2 * HOUR,
  });
}
