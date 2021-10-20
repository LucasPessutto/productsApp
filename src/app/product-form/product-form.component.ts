import { DepartmentService } from './../department.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../departament-form/department.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string = ""
  department!: Department;
  price: number = 0
  description: string = ""
  departments: Department[] = []

  constructor(private productService: ProductService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments()
  }

  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    })
    this.clear()
  }

  clear() {
    this.name = ""
    this.price = 0
    this.description = ""
  }

}
