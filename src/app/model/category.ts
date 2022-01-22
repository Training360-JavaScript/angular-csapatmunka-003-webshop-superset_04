export class Category {
  [key: string]: any;
  id: number = 0;
  name: string = "";
  description: string = "";


  constructor(id: number, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
