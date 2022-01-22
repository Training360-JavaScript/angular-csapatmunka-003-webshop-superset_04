export class Product {
  [key: string]: any;
  id: number = 0;
  catId: number = 0;
  name: string = "";
  description: string = "";
  image: string = "";
  price: number = 0;
  stock: boolean = true;
  featured: boolean = true;
  players: string = "";
  playingtime: string = "";
  age: string = "";
  weight: string = "";

  constructor(id: number, catId: number, name: string, description: string,
    image: string, price: number, stock: boolean, featured: boolean, players: string, playingtime: string, age: string, weight: string) {
    this.id = id;
    this.catId = catId;
    this.name = name;
    this.description = description;
    this.image = image;
    this.price = price;
    this.stock = stock;
    this.featured = featured;
    this.players = players;
    this.playingtime = playingtime;
    this.age = age;
    this.weight = weight;
  }
}
