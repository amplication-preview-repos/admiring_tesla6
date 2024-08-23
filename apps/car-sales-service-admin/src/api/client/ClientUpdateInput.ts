import { SaleUpdateManyWithoutClientsInput } from "./SaleUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  sales?: SaleUpdateManyWithoutClientsInput;
};
