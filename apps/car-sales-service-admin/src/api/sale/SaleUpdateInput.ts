import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type SaleUpdateInput = {
  amount?: number | null;
  car?: CarWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
};
