import { CartItem } from "./cartItem";
import { User } from "./user";


export class Cart {
  cartID!: number;
  createdDate!: Date;            // or string, depending on backend format
  user!: User;                   // assuming a full user object is returned
  items!: CartItem[];  
  status:	String | undefined          // list of cart items
}