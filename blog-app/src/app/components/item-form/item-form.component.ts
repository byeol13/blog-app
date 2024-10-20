import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {

  isVisible: boolean = true;
  @Output() onCancel = new EventEmitter<boolean>();
  @Output() saveAddedItem = new EventEmitter<boolean>();
  @Output() saveEditedItem = new EventEmitter<boolean>();
  @Input() selectedItem: Item = new Item();

  constructor (private itemService: ItemService) {}

  blogForm = new FormGroup({
    title: new FormControl(""),
    description: new FormControl(""),
    img_url: new FormControl("")
  });


  ngOnInit() {
    if(this.selectedItem.id) {
      this.blogForm.controls.title.setValue(this.selectedItem.title);
      this.blogForm.controls.description.setValue(this.selectedItem.description);
      this.blogForm.controls.img_url.setValue(this.selectedItem.img_url);
    }
  }

  cancel() {
    this.isVisible = false;
    this.onCancel.emit();
  }

  addItem() {
    const item: Item = {
      title: this.blogForm.controls.title.value ? this.blogForm.controls.title.value : " ",
      description: this.blogForm.controls.description.value ? this.blogForm.controls.description.value : " ",
      img_url: this.blogForm.controls.img_url.value ? this.blogForm.controls.img_url.value : " ",
      createdAt: new Date().toISOString()
    }

    this.itemService.addItem(item).subscribe(() => {
      this.saveAddedItem.emit(true);
    })
  }

  updateItem() {
    const item: Item = {
      id: this.selectedItem.id,
      title: this.blogForm.controls.title.value ? this.blogForm.controls.title.value : " ",
      description: this.blogForm.controls.description.value ? this.blogForm.controls.description.value : " ",
      img_url: this.blogForm.controls.img_url.value ? this.blogForm.controls.img_url.value : " ",
      createdAt: new Date().toISOString()
    }

    this.itemService.updateItem(item).subscribe(() => {
      this.saveEditedItem.emit(true);
    })
  }

  save() {
    if(this.selectedItem.id) {
      this.updateItem();
    } else {
      this.addItem();
    }
  }
}
