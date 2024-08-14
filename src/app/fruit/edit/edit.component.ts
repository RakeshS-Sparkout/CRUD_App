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
  fruit: Fruit | null = null; // To hold the fruit details

  constructor(
    private route: ActivatedRoute,
    private fruitService: FruitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    if (id) {
      this.fruitService.editFruit(+id).subscribe({
        next: (data) => {
          this.fruit = data; // Set the fetched fruit details
        },
        error: (err) => {
          console.error('Error fetching fruit:', err); // Log error
          this.router.navigate(['fruit/home']); // Redirect on error
        }
      });
    }
  }

  updateFruit() {
    if (this.fruit) {
      this.fruitService.updateFruit(this.fruit).subscribe({
        next: () => {
          this.router.navigate(['fruit/home']); // Navigate back after update
        },
        error: (err) => {
          console.error('Error updating fruit:', err);
        }
      });
    }
  }
}
