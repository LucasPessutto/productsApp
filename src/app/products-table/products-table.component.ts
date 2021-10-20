import { Product } from './../product-form/product.model';
import { ProductService } from './../product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable)
  datatable!: MatTable<any>;

  products: Product[] = []
  prodColumns: string[] = ["id", "name", "price", "description", "department"]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProduct()
    this.productService.onNewProduct.subscribe((p) => {
      this.datatable.renderRows()
    })
  }

}
