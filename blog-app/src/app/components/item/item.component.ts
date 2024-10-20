import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Router } from '@angular/router';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

  constructor( private itemService: ItemService, private router: Router) {}
  
  isExpanded: boolean = false;
  @Input() item: Item = new Item();
  @Output() onDeleteItem = new EventEmitter<string>();
  @Output() onEditItem = new EventEmitter<Item>();

  toggleReadLessOrMore() {
    this.isExpanded = !this.isExpanded;
  }

  delete() {
    this.itemService.deleteItem(this.item).subscribe(() => {
      this.onDeleteItem.emit('');
    })
  }

  triggerEditItem() {
    this.onEditItem.emit(this.item);
  }
}
