export class SortCategory {
  [key: string]: any;
  id: number;
  name: string;
  category: string;

  constructor(id: number =0, name: string= "", category: string= ""){
    this.id = id;
    this.name =  name;
    this.category = category;
  }
}

