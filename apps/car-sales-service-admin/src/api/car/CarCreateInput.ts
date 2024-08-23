import { SaleCreateNestedManyWithoutCarsInput } from "./SaleCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  make?: string | null;
  model?: string | null;
  price?: number | null;
  sales?: SaleCreateNestedManyWithoutCarsInput;
  year?: number | null;
};
