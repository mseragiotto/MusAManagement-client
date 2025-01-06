import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MuseumService } from '../services/museum.service';
import { Museum } from '../../../shared/models/museum.model';

@Component({
  selector: 'app-museum-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './museum-details.component.html',
  styleUrls: ['./museum-details.component.css']
})
export class MuseumDetailsComponent implements OnInit {
  museum: Museum = {} as Museum;

  // Se hai un museo ID fisso o ricavi da rotta, 
  // in questo esempio ipotizzo ID = 1
  private museumId = 1;

  constructor(private museumService: MuseumService) {}

  ngOnInit(): void {
    this.museumService.getMuseum(this.museumId).subscribe({
      next: (res) => this.museum = res,
      error: (err) => console.error('Error fetching museum', err)
    });
  }

  onSave(): void {
    this.museumService.updateMuseum(this.museumId, this.museum).subscribe({
      next: (updated) => {
        this.museum = updated;
        alert('Museum updated!');
      },
      error: (err) => console.error('Error updating museum', err)
    });
  }
}