import { SortOrder } from "../../util/SortOrder";

export type SaleOrderByInput = {
  amount?: SortOrder;
  carId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
