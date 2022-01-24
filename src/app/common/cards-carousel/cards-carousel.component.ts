import { Product } from 'src/app/model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrls: ['./cards-carousel.component.scss'],
})
export class CardsCarouselComponent implements OnInit {
  @Input() products: Product[] = [];

  @Input() carouselId: string = '';

  constructor() {}

  ngOnInit(): void {}
}
