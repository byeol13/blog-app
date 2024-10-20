import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {

  @Output() onAddArticle = new EventEmitter<boolean>();

  addArticle() {
    this.onAddArticle.emit(true);
  }
}
