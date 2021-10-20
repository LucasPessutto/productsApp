import { Department } from './departament-form/department.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {id: 1, name: "Clothing"},
    {id: 2, name: "books"},
    {id: 3, name: "Electronics"},
    {id: 4, name: "Computers"}
  ]

  private nextId: number = 5

  constructor() { }

  getDepartments(): Department[] {
    return this.departments
  }

  addDepartment(d: Department) {
    this.departments.push({...d, id: this.nextId++})
    console.log(this.departments)
  }

  getDepartmentById(id: number): Department | any {
    return this.departments.find((d) => d.id == id)
  }
}
