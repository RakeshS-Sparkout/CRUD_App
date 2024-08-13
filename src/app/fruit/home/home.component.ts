import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allFruits: Fruit[] = [];

  constructor(private fruitService: FruitService) {}

  ngOnInit(): void {
    this.fruitService.getAllFruits().subscribe((data) => {
      this.allFruits = data;
      console.log(this.allFruits);
    })
  }
  deleteItem(id: number){
    this.fruitService.deleteFruit(id).subscribe({
      next: (data) => {
        this.allFruits = this.allFruits.filter(_=>_.id != id)
      }
    })
  }

}
