import { Sale } from "../sale/Sale";

export type Client = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  sales?: Array<Sale>;
  updatedAt: Date;
};
