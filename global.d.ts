// index.d.ts
import type { DataLayer } from "@shoptet/datalayer";

// Pokud chcete deklarovat globální funkci:
declare global {
  function getShoptetDataLayer(): DataLayer;
}

export {};
