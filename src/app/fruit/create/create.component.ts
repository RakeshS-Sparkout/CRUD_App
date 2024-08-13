import { Component } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private fruitService: FruitService, private route: Router) {}

  formData: Fruit = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  create(){
    this.fruitService.createFruit(this.formData).subscribe({
      next:(data) => {
        this.route.navigate(['fruit/home']);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
