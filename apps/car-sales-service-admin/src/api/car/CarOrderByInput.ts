import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
