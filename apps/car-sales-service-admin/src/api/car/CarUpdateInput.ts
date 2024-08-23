import { SaleUpdateManyWithoutCarsInput } from "./SaleUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  make?: string | null;
  model?: string | null;
  price?: number | null;
  sales?: SaleUpdateManyWithoutCarsInput;
  year?: number | null;
};
