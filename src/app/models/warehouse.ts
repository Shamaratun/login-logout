

export class Warehouse {
  warehouseId?: number;
  location: string;
  stockLevel: number;

  constructor() {
    this.location = '';
    this.stockLevel = 0;
  }
}
