import Head from "next/head";
import { fetchRestaurantById } from "../../utils/fetch";
import DishesList from "../../components/restaurant/DishesList";
import NewDishButton from "../../components/restaurant/NewDishButton";
import PageNotFound from "../404";
import { useContext, useEffect } from "react";
import AppContext from "../../components/Context";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { IRestaurant } from "../../utils/types";

interface IRestaurantProps {
  id: string;
  restaurant: IRestaurant;
}

function Restaurant({ id, restaurant }: IRestaurantProps) {
  const { state, setState } = useContext(AppContext);

  useEffect(() => {
    setState({
      ...state,
      actualPlace: { id: parseInt(id), name: restaurant.name },
    });
  }, []);

  if (!restaurant) return PageNotFound;
  else
    return (
      <>
        <Head>
          <title>{restaurant?.name} | Share Eat</title>
        </Head>
        <main className="f-col ctr">
          <DishesList name={restaurant?.name} dishes={restaurant?.menuItems} />
        </main>
        <NewDishButton />
      </>
    );
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

// Just force first render in server runtime and then generate ISR
export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const restaurant = await fetchRestaurantById(id);

  return {
    props: { id, restaurant },
  };
};

export default Restaurant;
