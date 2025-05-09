import { Order } from './order';  // Ensure the path is correct for your project

export class Shipping {
  shippingID?: number;
  address: string;
  city: string;
  country: string;
  deliveryMethod: string;
  estimatedDeliveryTime?: string;
  shippingCost?: number;
  order?: Order; // Optional to prevent circular dependency issues

  constructor(
    address: string,
    city: string,
    country: string,
    deliveryMethod: string,
    estimatedDeliveryTime?: string,
    shippingCost?: number,
    order?: Order
  ) {
    this.address = address;
    this.city = city;
    this.country = country;
    this.deliveryMethod = deliveryMethod;
    this.estimatedDeliveryTime = estimatedDeliveryTime;
    this.shippingCost = shippingCost;
    this.order = order;
  }
}