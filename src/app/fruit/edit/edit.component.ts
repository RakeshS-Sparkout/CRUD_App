import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FruitService } from '../fruit.service';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formData: Fruit = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0
  }

  constructor(private fruitService: FruitService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let id = param.get('id') as string;
      this.getById(id);
    })
  }

  getById(id: string){    
    this.fruitService.editFruit(id).subscribe({
      next: (res: any) =>{
        console.log(res);
      },
      error: (err: any) =>{
        console.log(err);
      }
    })
  }

  update(){
    this.fruitService.updateFruit(this.formData).subscribe({
      next:(data) => {
        this.router.navigate(['fruit/home']);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
