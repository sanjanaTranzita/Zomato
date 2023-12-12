import { Component ,OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../services/food/food.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  searchItem:string='';
  constructor(private route:ActivatedRoute, private router:Router, private foodService:FoodService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
        this.searchItem = params['searchItem'];
    })
  }
  search():void{
    if(this.searchItem)
      this.router.navigateByUrl('/search/' +this.searchItem)
  }


}
