import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../product.model';
import { DiscountPipe } from '../discount.pipe';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule, DiscountPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  // Function to get color based on rating
  getColor(rating: number): string {
    if (rating >= 4) {
      return 'green';
    } else if (rating >= 2) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  // Add the product to the cart
  addToCart(): void {
    const cartItem: CartItem = {
      name: this.product.title,
      price: this.product.price,
      thumbnail: this.product.thumbnail // Ensure the thumbnail property is included
    };
    this.cartService.addToCart(cartItem);
  }

  // Function to generate stars for rating
  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  // Function to generate empty stars for rating
  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}
