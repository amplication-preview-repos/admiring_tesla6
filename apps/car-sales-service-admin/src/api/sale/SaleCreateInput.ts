import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type SaleCreateInput = {
  amount?: number | null;
  car?: CarWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
};
