import type { NextApiRequest, NextApiResponse } from 'next'
import type { IRestaurant } from "../../../utils/types";
import payload from "../../../../public/api.json";

interface NotFound {
  error: string,
}

// A bit of overengineering to simulate API calls 
export default function handler(req: NextApiRequest, res: NextApiResponse<IRestaurant | NotFound>) {
  const id = parseInt(req.query.id as string);
  const restaurant = payload[id];

  if (!restaurant) res.status(404).json({ error: "Not found" });
  else res.status(200).json(payload[id]);
}
