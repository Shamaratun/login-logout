import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Author } from '../../../models/author';
import { AuthorService } from '../../../core/service/author.service';

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  author: Author = new Author(); // form model
  isUpdate: boolean = false;
  currentEditId: number | null = null;

  constructor(private authorService: AuthorService) {}

  ngOnInit(): void {
    this.loadAuthors();
  }

  loadAuthors(): void {
    this.authorService.getAuthors().subscribe({
      next: (data) => (this.authors = data),
      error: (err) => console.error('Error loading authors:', err),
    });
  }

  onSubmit(): void {
    if (this.isUpdate && this.currentEditId !== null) {
      this.authorService.updateAuthor(this.currentEditId, this.author).subscribe({
        next: () => {
          this.loadAuthors();
          this.resetForm();
          alert('Author updated successfully!');
        },
        error: (err) => console.error('Update failed:', err),
      });
    } else {
      this.authorService.createAuthor(this.author).subscribe({
        next: () => {
          this.loadAuthors();
          this.resetForm();
          alert('Author added successfully!');
        },
        error: (err) => console.error('Create failed:', err),
      });
    }
  }

  editAuthor(author: Author): void {
    this.author = { ...author };
    this.currentEditId = author.authorId!;
    this.isUpdate = true;
  }

  deleteAuthor(author: Author): void {
    if (author.authorId != null && confirm('Are you sure you want to delete this author?')) {
      this.authorService.deleteAuthor(author.authorId).subscribe({
        next: () => {
          this.loadAuthors();
          alert('Author deleted successfully!');
        },
        error: (err) => console.error('Delete failed:', err),
      });
    }
  }

  resetForm(): void {
    this.author = new Author();
    this.isUpdate = false;
    this.currentEditId = null;
  }

  trackById(index: number, author: Author): number {
    return author.authorId!;
  }
}
