export class Food {
  Food_item_id: number;
  Name: string;
  Rate: number;
  Type: string;
}

export class Orders {
  Id: number;
  Food_item_id: number;
  Guest_id: number;
  Date: Date;
  Quantity: number;
}
