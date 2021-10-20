import { Department } from './../departament-form/department.model';

export interface Product {
  id?: number
  name: string
  price: number
  description: string
  department: Department
}
