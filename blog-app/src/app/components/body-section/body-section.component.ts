import { Component } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-body-section',
  templateUrl: './body-section.component.html',
  styleUrl: './body-section.component.scss'
})
export class BodySectionComponent {

  items: Item[] = [];
  paginatedItems: Item[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 3;

  constructor( private itemService: ItemService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentPage = +params['page'] || 1;
      this.getItems(); 
    });
  } 
  
  getItems() {
    this.itemService.getItems().subscribe((res) => {
      this.items = res;
      this.updatePaginatedItems();
    }); 
  }  

  toggleStepper: boolean = false;

  selectedItem: Item = new Item();

  editItem(item: Item){
    this.selectedItem = item;
    this.toggleStepper = true;
  } 

  closeEdit() {
    this.toggleStepper = false;
    this.selectedItem = new Item();
    this.getItems();
  }

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  updatePaginatedItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedItems = this.items.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.router.navigate(['/items', this.currentPage]); 
      this.updatePaginatedItems();
      window.scrollTo({ top: 300, behavior: 'auto' });
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate(['/items', this.currentPage]); 
      this.updatePaginatedItems();
      window.scrollTo({ top: 300, behavior: 'auto' });
    }
  }

  closeAdding() {
    this.toggleStepper = false;
    this.selectedItem = new Item();

    this.router.navigate(['/items', 1]).then(() => {
      this.currentPage = 1;
      this.getItems();
      window.scrollTo({ top: 350, behavior: 'auto' });
    });
  }
}
