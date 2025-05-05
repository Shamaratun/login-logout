import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-items',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
})
export class BookItemsComponent implements OnInit {
  writers: Writer[] = [];
  writer: Writer = new Writer(0, '', '', 0, '');
  currentIndex: number | null = null;
  isUpdate: boolean = false;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['writer']) {
      this.writer = nav.extras.state['writer'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {
    const savedWriters = localStorage.getItem('writers');
    if (savedWriters) {
      this.writers = JSON.parse(savedWriters);
    }
  }

  onSubmit(): void {
    let writers: Writer[] = JSON.parse(localStorage.getItem('writers') || '[]');
    if (this.isUpdate) {
      writers = writers.map(w => (w.id === this.writer.id ? this.writer : w));
    } else {
      this.writer.id = writers.length ? Math.max(...writers.map(w => w.id)) + 1 : 1;
      writers.push(this.writer);
    }
    localStorage.setItem('writers', JSON.stringify(writers));
    this.writers = writers;
    this.resetForm();
  }

  deleteWriter(i: number): void {
    if (confirm('Are you sure you want to delete this writer?')) {
      //this.writers = this.writers.filter(writer => writer.id !== writerToDelete.id);
      this.writers.splice(i, 1);

      localStorage.setItem('writers', JSON.stringify(this.writers));
      alert('Writer deleted successfully');
    }
  }

  editWriter(writer: Writer, i: number): void {
    this.writer = {...writer};
    this.currentIndex = i;
    this.isUpdate = true;
    
    //this.router.navigate(['/book-items'], { state: { writer } });
  }

  resetForm(): void {
    this.writer = new Writer(0, '', '', 0, '');
    this.isUpdate = false;
  }

  onImageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageUrl = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        alert('Only image files are allowed!');
      }
    }
  }

  addToCart(writer: Writer): void {
    let cart: Writer[] = JSON.parse(localStorage.getItem('cart') || '[]');
    if (cart.some(item => item.id === writer.id)) {
      alert('This book is already in your cart.');
      return;
    }
    cart.push(writer);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${writer.bookName} has been added to the cart.`);
  }

  detailsOfBook(writer: Writer): void {
    this.router.navigate(['/book-details'], { state: { writer } });
  }
}

class Writer {
  constructor(
    public id: number,
    public writerName: string,
    public bookName: string,
    public price: number,
    public imageUrl: string | null
  ) {}
}
