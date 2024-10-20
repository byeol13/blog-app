import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-right-side-sections',
  templateUrl: './right-side-sections.component.html',
  styleUrl: './right-side-sections.component.scss'
})
export class RightSideSectionsComponent {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() titleClass: string = '';
}
