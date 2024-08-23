import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SaleListRelationFilter } from "../sale/SaleListRelationFilter";

export type ClientWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  sales?: SaleListRelationFilter;
};
