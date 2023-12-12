export class Foods{
  id!:number;
  price!:number;
  name!:string;
  favorite:boolean = false;
  tags?:string[];
  cookTime!: string;
  imageUrl!:string;
  origins!:string[];
}
