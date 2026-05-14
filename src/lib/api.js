const API_BASE = "https://kwirkmart.expertech.dev/api";

async function request(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    throw new Error(`API ${path} failed: ${res.status}`);
  }
  return res.json();
}

export function fetchProducts() {
  return request("/products/").then((payload) => {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.data)) return payload.data;
    return [];
  });
}

export function fetchCategories() {
  return request("/categories/").then((payload) =>
    Array.isArray(payload) ? payload : payload?.data ?? []
  );
}

export function fetchSubcategories() {
  return request("/subcategories/").then((payload) =>
    Array.isArray(payload) ? payload : payload?.data ?? []
  );
}

export function formatPrice(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "";
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2,
  }).format(num);
}

export function getEffectivePrice(product) {
  const discount = Number(product?.discount_price ?? product?.discounted_price);
  const base = Number(product?.price);
  if (Number.isFinite(discount) && discount > 0 && discount < base) {
    return { price: discount, original: base, hasDiscount: true };
  }
  return { price: Number.isFinite(base) ? base : 0, original: null, hasDiscount: false };
}
