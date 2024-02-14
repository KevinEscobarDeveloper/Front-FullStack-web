import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { Character } from '../../models/character';


@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent  implements OnInit{

  carts: Character[] = [];
  currentImageIndices: number[] = [];
  constructor(private cartService: CartServiceService) { }
  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.cartService.getCharacters().subscribe((data) => {
      this.carts = data;
    });
    console.log(this.carts);
    this.currentImageIndices = Array(this.carts.length).fill(0);
    console.log(this.currentImageIndices)
  }



  /**
   * Changes the image displayed for a specific card in the cart view.
   * @param cardIndex - The index of the card in the carts array.
   * @param direction - The direction to change the image. Can be 'prev' or 'next'.
   */
  changeImage(cardIndex: number, direction: 'prev' | 'next'): void {
    const totalImages = this.carts[cardIndex].images.length;
    console.log(this.carts[cardIndex].images.length)
    if (direction === 'prev') {
      this.currentImageIndices[cardIndex] = (this.currentImageIndices[cardIndex] - 1 + totalImages) % totalImages;
      console.log(this.currentImageIndices)
    } else {
      this.currentImageIndices[cardIndex] = (this.currentImageIndices[cardIndex] + 1) % totalImages;
      console.log(this.currentImageIndices)
    }
  }
}
