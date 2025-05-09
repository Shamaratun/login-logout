export class Warehouse {
  warehouseID?: number;
  location: string;
  stockLevel: number;
  books?: any[]; // Assuming you have a Book model for the related data
  inventories?: any[]; // Assuming you have an Inventory model for the related data

  constructor(location: string, stockLevel: number, warehouseID?: number, books?: any[], inventories?: any[]) {
    this.warehouseID = warehouseID;
    this.location = location;
    this.stockLevel = stockLevel;
    this.books = books || [];
    this.inventories = inventories || [];
  }
}
