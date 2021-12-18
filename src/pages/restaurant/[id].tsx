import Head from "next/head";
import { fetchRestaurantById } from "../../utils/fetch";
import DishesList from "../../components/restaurant/DishesList";
import ModalHandler from "../../components/modal/ModalHandler";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { IRestaurant } from "../../utils/types";
import PageNotFound from "../404";

interface IRestaurantProps {
  restaurant: IRestaurant;
}

function Restaurant({ restaurant }: IRestaurantProps) {
  if (!restaurant) return PageNotFound;

  return (
    <>
      <Head>
        <title>{restaurant?.name} | Share Eat</title>
      </Head>
      <main className="f-col ctr">
        <DishesList name={restaurant?.name} dishes={restaurant?.menuItems} />
      </main>
      <ModalHandler />
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
    props: { restaurant },
  };
};

export default Restaurant;
