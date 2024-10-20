import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  images = [
    'assets/gallery/gallery-img5.jpg',
    'assets/gallery/gallery-img7.jpg',
    'assets/gallery/gallery-img8.jpg',
    'assets/gallery/gallery-img13.jpg'
  ];
}
