import { Car } from "../car/Car";
import { Client } from "../client/Client";

export type Sale = {
  amount: number | null;
  car?: Car | null;
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
