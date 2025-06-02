import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-discount',
  imports: [],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.css'
})
export class DiscountComponent implements OnInit {
 

  discount!: FormGroup;
  discountAmount = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.discount = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      discountPercentage: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      criteria: [''],
      discountAmount: [{ value: 0, disabled: true }] // readonly field
    });

    this.discount.get('discountPercentage')?.valueChanges.subscribe(() => {
      this.updateDiscountAmount();
    });
  }

  updateDiscountAmount(): void {
    const percent = this.discount.get('discountPercentage')?.value || 0;
    const dummyTotal = 1000; // Replace with actual logic if needed
    this.discountAmount = (percent / 100) * dummyTotal;
    this.discount.get('discountAmount')?.setValue(this.discountAmount);
  }

  onSubmit(): void {
    if (this.discount.invalid) return;
    const formValue = this.discount.getRawValue();
    console.log('Discount data:', formValue);
  }
}

// discount: [0],
// discountAmount: [0],
// const discount = this.invoiceForm.get('discount')?.value || 0;
// const discountAmount = amount * (discount / 100);
// const netPayable = amount - discountAmount;

// this.invoiceForm.patchValue({
//   amount,
//   discountAmount,
//   netPayable
// });
// this.invoiceForm.reset({
//   discount: 0,
//   amount: 0,
//   discountAmount: 0,
//   netPayable: 0
// });

// }
