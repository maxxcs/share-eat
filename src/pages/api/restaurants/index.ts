import type { NextApiRequest, NextApiResponse } from 'next'
import type { IRestaurant } from "../../../utils/types";
import payload from "../../../../public/api.json";

// A bit of overengineering to simulate API calls 
export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IRestaurant>>) {
  res.status(200).json(payload);
}
