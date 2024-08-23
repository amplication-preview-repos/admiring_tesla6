import { Sale } from "../sale/Sale";

export type Car = {
  createdAt: Date;
  id: string;
  make: string | null;
  model: string | null;
  price: number | null;
  sales?: Array<Sale>;
  updatedAt: Date;
  year: number | null;
};
