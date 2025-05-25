import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [NgIf,NgFor],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  bookInvoiceForm!: FormGroup;

  // Simulated book inventory with editions and prices
  bookInventory = [
    {
      title: 'Mathematics Grade 10',
      editions: [
        { edition: '1st', price: 200 },
        { edition: '2nd', price: 250 }
      ]
    },
    {
      title: 'Physics Grade 10',
      editions: [
        { edition: '1st', price: 220 },
        { edition: 'Revised', price: 270 }
      ]
    },
    {
      title: 'Chemistry Grade 10',
      editions: [
        { edition: '2020', price: 300 },
        { edition: '2022', price: 320 }
      ]
    }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookInvoiceForm = this.fb.group({
      customerName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      items: this.fb.array([this.createItem()]),
      amount: [{ value: 0, disabled: true }],
      discount: [0],
      discountAmount: [{ value: 0, disabled: true }],
      netPayable: [{ value: 0, disabled: true }]
    });

    // Watch discount change
    this.bookInvoiceForm.get('discount')?.valueChanges.subscribe(() => this.calculateTotals());
  }

  get items(): FormArray {
    return this.bookInvoiceForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      bookTitle: ['', Validators.required],
      edition: ['', Validators.required],
      unitPrice: [{ value: 0, disabled: true }],
      quantity: [1, [Validators.required, Validators.min(1)]],
      subTotal: [{ value: 0, disabled: true }]
    });
  }

  addItem(): void {
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    this.items.removeAt(index);
    this.calculateTotals();
  }

  onBookChange(index: number): void {
    const itemGroup = this.items.at(index);
    const selectedTitle = itemGroup.get('bookTitle')?.value;
    const selectedEdition = itemGroup.get('edition')?.value;

    const book = this.bookInventory.find(b => b.title === selectedTitle);
    const edition = book?.editions.find(e => e.edition === selectedEdition);

    if (edition) {
      itemGroup.get('unitPrice')?.setValue(edition.price);
      const quantity = itemGroup.get('quantity')?.value || 1;
      itemGroup.get('subTotal')?.setValue(edition.price * quantity);
    } else {
      itemGroup.get('unitPrice')?.setValue(0);
      itemGroup.get('subTotal')?.setValue(0);
    }

    this.calculateTotals();
  }

  calculateRowSubTotal(index: number): void {
    const itemGroup = this.items.at(index);
    const quantity = +itemGroup.get('quantity')?.value || 0;
    const unitPrice = +itemGroup.get('unitPrice')?.value || 0;

    itemGroup.get('subTotal')?.setValue(quantity * unitPrice);
    this.calculateTotals();
  }

  getEditionOptions(index: number): string[] {
    const selectedTitle = this.items.at(index).get('bookTitle')?.value;
    const book = this.bookInventory.find(b => b.title === selectedTitle);
    return book ? book.editions.map(e => e.edition) : [];
  }

  calculateTotals(): void {
    const totalAmount = this.items.controls.reduce((sum, ctrl) => {
      return sum + (+ctrl.get('subTotal')?.value || 0);
    }, 0);

    const discountPercent = +this.bookInvoiceForm.get('discount')?.value || 0;
    const discountAmount = (totalAmount * discountPercent) / 100;
    const netPayable = totalAmount - discountAmount;

    this.bookInvoiceForm.patchValue({
      amount: totalAmount,
      discountAmount: discountAmount,
      netPayable: netPayable
    });
  }

  onSubmit(): void {
    if (this.bookInvoiceForm.invalid) {
      this.bookInvoiceForm.markAllAsTouched();
      return;
    }

    const formData = this.bookInvoiceForm.getRawValue(); // getRawValue to include disabled fields
    console.log('Submitted Invoice:', formData);

    // You can send `formData` to backend API here
  }
}
