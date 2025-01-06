import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../../../shared/models/author.model';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author: Author | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authorsService: AuthorsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.authorsService.getAuthor(id).subscribe({
      next: (auth) => this.author = auth,
      error: (err) => console.error('Error fetching author', err)
    });
  }

  onSave(): void {
    if (!this.author) return;
    this.authorsService.updateAuthor(this.author.id, this.author).subscribe({
      next: (updated) => {
        this.author = updated;
        alert('Author updated!');
      },
      error: (err) => console.error('Error updating author', err)
    });
  }

  onDelete(): void {
    if (!this.author) return;
    this.authorsService.deleteAuthor(this.author.id).subscribe({
      next: () => {
        alert('Author deleted!');
        this.router.navigate(['/authors']);
      },
      error: (err) => console.error('Error deleting author', err)
    });
  }
}