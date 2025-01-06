import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../../../shared/models/author.model';

@Component({
  selector: 'app-authors-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Author[] = [];
  searchTerm = '';

  constructor(
    private authorsService: AuthorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authorsService.getAllAuthors().subscribe({
      next: (data) => this.authors = data,
      error: (err) => console.error('Error loading authors', err)
    });
  }

  get filteredAuthors(): Author[] {
    if (!this.searchTerm) return this.authors;
    return this.authors.filter(a =>
      a.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onSelectAuthor(id: number): void {
    this.router.navigate(['/authors', id]);
  }

  onAddAuthor(): void {
    // Esempio: creiamo un autore "New Author"
    this.authorsService.createAuthor({ name: 'New Author', published: false })
      .subscribe(newAuthor => {
        this.authors.push(newAuthor);
      });
  }
}