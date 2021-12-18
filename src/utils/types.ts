export interface IRestaurant {
  name: string;
  menuItems: Array<IMenuItem>;
}

export interface IMenuItem {
  name: string;
  description: string;
  price: number;
}
