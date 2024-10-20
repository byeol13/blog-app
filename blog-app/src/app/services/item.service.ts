import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/api/article';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.apiUrl) as Observable<Item[]>;
  }

  updateItem(updatedItem: Item) {
    return this.http.put(`${this.apiUrl}/${updatedItem.id}`, updatedItem) as Observable<Item>;
  }

  deleteItem(deleteItem: Item) {
    return this.http.delete('http://localhost:8080/api/article/' + deleteItem.id) as Observable<Item>;
  }

  addItem(addedItem: Item) {
    return this.http.post(this.apiUrl, addedItem) as Observable<Item>;
  }
}
