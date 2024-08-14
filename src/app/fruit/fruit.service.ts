import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private http: HttpClient) {}

  getAllFruits() {
    return this.http.get<Fruit[]>('http://localhost:3000/fruits');
  }

  // Omit 'id' from data when creating a fruit
  createFruit(data: Omit<Fruit, 'id'>) {
    return this.http.post('http://localhost:3000/fruits', data);
  }

  editFruit(id: number) {    
    return this.http.get<Fruit>(`http://localhost:3000/fruits/${id}`);
  }

  updateFruit(data: Fruit) {
    return this.http.put<Fruit>(`http://localhost:3000/fruits/${data.id}`, data);
  }

  deleteFruit(id: number) {
    return this.http.delete(`http://localhost:3000/fruits/${id}`);
  }
}
