import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../services/food/food.service";
import {Foods} from "../shared/models/food";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  searchItem:string='';
  food:Foods[]=[];
  constructor(private route:ActivatedRoute, private router:Router, private foodService:FoodService) {
  }

  ngOnInit(): void {
   this.food=this.foodService.getAll()

  }


  search(): void {
    if (this.searchItem) {
      const matchingFood = this.food.filter(foodItem => foodItem.name.toLowerCase().includes(this.searchItem.toLowerCase()));

      if (matchingFood.length > 0) {
        this.router.navigateByUrl('/search/' + this.searchItem);
      } else {
        this.router.navigateByUrl('no-result');
      }
    }
    this.searchItem=""

  }

}
