import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../product-data';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  addToCart(): void {
    if (this.product) {
      const cartItem: CartItem = {
        name: this.product.title,
        price: this.product.price,
        thumbnail: this.product.thumbnail
      };
      this.cartService.addToCart(cartItem);
    }
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }
}
