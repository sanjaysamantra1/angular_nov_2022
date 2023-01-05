import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<any> {

  constructor(private productsService:ProductsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = parseInt(route.paramMap.get('id') || '');
    return this.productsService.getProductDetails(id);
  }
}
