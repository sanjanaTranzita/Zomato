import { Injectable } from '@angular/core';
import {Foods} from "../../shared/models/food";
import {Tag} from "../../shared/models/tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number){
    return this.getAll().find(food =>food.id ==id)!;
  }
  getAllFoodsByTag(tags:string):Foods[]{
    if(tags == 'All')
      return  this.getAll()
    else
      return this.getAll().filter(food =>food.tags?.includes(tags));
  }
  getAllTags():Tag[]{
    return [
      {name:'All',count:10},
      {name: 'Fastfood', count:7},
      {name: 'Snacks', count:5},
      {name: 'breakfast', count:3},
      {name: 'dinner', count:2},
      {name: 'lunch', count:1},
      {name: 'Maincourse', count:7},
    ];

  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'French Fries',
        cookTime:'10-20min',
        price:25,
        favorite:false,
        origins:['america east china'],
        imageUrl: '/assets/food-1.jpg',
        tags:['Fastfood','French Fries','Snacks'],
      },
      {
        id:2,
        name:'Aloo Tikki Burger',
        cookTime:'10-20min',
        price:35,
        favorite:true,
        origins:['America Germany'],
        imageUrl: '/assets/food-2.jpg',
        tags:['Snacks','Burger','breakfast'],
      },
      {
        id:3,
        name:'Ice cream',
        cookTime:'10-20min',
        price:75,
        favorite:true,
        origins:['Italy south-asia'],
        imageUrl: '/assets/food-3.jpg',
        tags:['Fastfood','Ice cream','Snacks'],
      },
      {
        id:4,
        name:'Mexican Pizza',
        cookTime:'30-40min',
        price:150,
        favorite:false,
        origins:['america europe'],
        imageUrl: '/assets/food-4.jpg',
        tags:['Fastfood','Pizza','lunch'],
      },
      {
        id:5,
        name:'Paneer roll',
        cookTime:'20min',
        price:40,
        favorite:true,
        origins:['India','Germany'],
        imageUrl: '/assets/food-5.jpg',
        tags:['Fastfood','Paneer roll','breakfast'],
      },
      {
        id:6,
        name:'Steam Momos',
        cookTime:'15-20min',
        price:45,
        favorite:false,
        origins:['china france India'],
        imageUrl: '/assets/food-6.jpg',
        tags:['Fastfood','Momos','Snacks'],
      },
      {
        id:7,
        name:'Tikki Chaat',
        cookTime:'10-20min',
        price:25,
        favorite:true,
        origins:['India persia'],
        imageUrl: '/assets/food-7.jpg',
        tags:['Fastfood','Chaat','breakfast'],
      },
      {
        id:8,
        name:'Tandoori Paneer',
        cookTime:'30min',
        price:125,
        favorite:false,
        origins:['America','Germany'],
        imageUrl: '/assets/food-8.jpg',
        tags:['Maincourse','Tandoori Paneer','dinner'],
      },
      {
        id:9,
        name:'Paneer Manchurain',
        cookTime:'40min',
        price:150,
        favorite:true,
        origins:['China','Germany'],
        imageUrl: '/assets/food-9.jpg',
        tags:['Maincourse','Paneer Manchurain','dinner'],
      },
      {
        id:10,
        name:'Wrap',
        cookTime:'35min',
        price:99,
        favorite:false,
        origins:['America','India'],
        imageUrl: '/assets/food-10.jfif',
        tags:['Fastfood','Wrap','Snacks'],
      },
      {
        id:11,
        name:'Soup',
        cookTime:'10min',
        price:20,
        favorite:false,
        origins:['India'],
        imageUrl:'/assets/food-11.jfif',
        tags:['Drink'],
      }

    ];
  }
}
