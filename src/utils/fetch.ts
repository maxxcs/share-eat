import type { IRestaurant } from "../utils/types";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

export async function fetchRestaurants(): Promise<Array<IRestaurant>> {
  try {
    const response = await fetch(`${BASE_URL}/api/restaurants`);
    if (!response.ok) throw new Error("Something went wrong while fetching");
    return response.json();
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    return [];
  }
}

export async function fetchRestaurantById(id: string): Promise<IRestaurant | null> {
  try {
    const response = await fetch(`${BASE_URL}/api/restaurants/${id}`);
    if (!response.ok) throw new Error("Something went wrong while fetching");
    return response.json();
  } catch (err) {
    if (err instanceof Error) console.error(err.message);
    return null;
  }
}
