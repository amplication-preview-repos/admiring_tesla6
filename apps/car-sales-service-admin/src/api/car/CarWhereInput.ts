import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
  price?: FloatNullableFilter;
  sales?: SaleListRelationFilter;
  year?: IntNullableFilter;
};
