import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discountPercentage: number): number {
    const discount = (price * discountPercentage) / 100;
    return price - discount;
  }
}
