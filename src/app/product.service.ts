import { DepartmentService } from './department.service';
import { Product } from './product-form/product.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] = [
    {id: 1, name: "Laptop", department_id: 4, price: 40, description: 'Laptop Description'},
    {id: 2, name: "Shirt", department_id: 1, price: 10, description: 'Shirt Description'},
    {id: 3, name: "Polo", department_id: 1, price: 50, description: 'Polo Description'},
    {id: 4, name: "Mouse", department_id: 3, price: 30, description: 'Mouse Description'}
  ]

  private products: Product[] = []
  private nexId: number = 5

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>()

  constructor(private departmentSerive: DepartmentService) {
    for (let p of this.dataFromServer) {
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentSerive.getDepartmentById(p.id)
      });
      this.nexId = p.id+1
    }
  }

  getProduct(): Product[] {
    return this.products
  }

  addProduct(p: Product) {
    let prod: Product = {id: this.nexId++, ...p}
    this.products.push(prod)
    console.log(this.products)
    this.onNewProduct.emit(prod)
  }
}
