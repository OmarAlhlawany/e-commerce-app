import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { CartItem } from '../cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  updateQuantity(item: CartItem, quantity: number): void {
    this.cartService.updateQuantity(item, quantity);
    this.cartItems = this.cartService.getCart(); // Refresh cart items
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItem(item);
    this.cartItems = this.cartService.getCart(); // Refresh cart items
  }

  getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }
}
