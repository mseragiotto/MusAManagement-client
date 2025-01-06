// src/app/features/museum/services/museum.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Museum } from '../../../shared/models/museum.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuseumService {
  private baseUrl = `${environment.apiUrl}/museums`;

  constructor(private http: HttpClient) {}

  getMuseum(id: number): Observable<Museum> {
    return this.http.get<Museum>(`${this.baseUrl}/${id}`);
  }

  updateMuseum(id: number, museumData: Partial<Museum>): Observable<Museum> {
    return this.http.put<Museum>(`${this.baseUrl}/${id}`, museumData);
  }

  // Se vuoi fare create/delete:
  // createMuseum(data: Partial<Museum>): ...
  // deleteMuseum(id: number): ...
}