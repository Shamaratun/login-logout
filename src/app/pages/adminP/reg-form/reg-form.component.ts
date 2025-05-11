import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../../../models/warehouse';
import { WarehouseService } from '../../../core/service/warehouse.service';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-reg-form',
  imports: [NgFor],
  templateUrl: './reg-form.component.html',
})
export class RegFormComponent implements OnInit {
  warehouses: Warehouse[] = [];

  constructor(private warehouseService: WarehouseService) {}

  ngOnInit(): void {
    this.loadWarehouses();
  }

  loadWarehouses(): void {
    this.warehouseService.getAllWarehouses().subscribe(data => {
      this.warehouses = data;
    });
  }
}