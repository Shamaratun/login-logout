import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WarehouseService } from '../../../core/service/warehouse.service';
import { Warehouse } from '../../../models/warehouse';

@Component({
  selector: 'app-warehouse-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouses: Warehouse[] = [];
  newWarehouse: Warehouse = new Warehouse(); // form model
  isUpdate: boolean = false;
  currentEditId: number | null = null;

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.loadWarehouses();
  }

  loadWarehouses(): void {
    this.warehouseService.getWarehouses().subscribe({
      next: (data) => this.warehouses = data,
      error: (err) => console.error('Error loading warehouses:', err)
    });
  }

  addWarehouse(): void {
    if (this.isUpdate && this.currentEditId !== null) {
      this.warehouseService.updateWarehouse(this.currentEditId, this.newWarehouse).subscribe({
        next: () => {
          this.loadWarehouses();
          this.resetForm();
          alert('Warehouse updated successfully!');
        },
        error: (err) => console.error('Update failed:', err)
      });
    } else {
      this.warehouseService.createWarehouse(this.newWarehouse).subscribe({
        next: () => {
          this.loadWarehouses();
          this.resetForm();
          alert('Warehouse added successfully!');
        },
        error: (err) => console.error('Create failed:', err)
      });
    }
  }

  editWarehouse(warehouse: Warehouse): void {
    this.newWarehouse = { ...warehouse };
    this.currentEditId = warehouse.warehouseId!;
    this.isUpdate = true;
  }

  deleteWarehouse(warehouse: Warehouse): void {
    if (warehouse.warehouseId != null && confirm('Are you sure you want to delete this warehouse?')) {
      this.warehouseService.deleteWarehouse(warehouse.warehouseId).subscribe({
        next: () => {
          this.loadWarehouses();
          alert('Warehouse deleted successfully!');
        },
        error: (err) => console.error('Delete failed:', err)
      });
    }
  }

  resetForm(): void {
    this.newWarehouse = new Warehouse();
    this.isUpdate = false;
    this.currentEditId = null;
  }

  trackById(index: number, warehouse: Warehouse): number {
    return warehouse.warehouseId!;
  }
}
