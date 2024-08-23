import { SaleCreateNestedManyWithoutClientsInput } from "./SaleCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  sales?: SaleCreateNestedManyWithoutClientsInput;
};
