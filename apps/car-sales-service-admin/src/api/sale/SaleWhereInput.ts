import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SaleWhereInput = {
  amount?: FloatNullableFilter;
  car?: CarWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
