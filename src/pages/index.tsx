import Head from "next/head";
import { fetchRestaurants } from "../utils/fetch";
import type { GetServerSideProps } from "next";
import type { IRestaurant } from "../utils/types";

interface IHomeProps {
  restaurants: Array<IRestaurant>;
}

function Home(props: IHomeProps) {
  return (
    <>
      <Head>
        <title>Home | Share Eat</title>
      </Head>
      <main className="f-col ctr">
      </main>
    </>
  );
}

// As the API will not be online at build time, we need to do SSR at runtime for the first request
// This is inefficient, ideally it would be using SSG or ISR
export const getServerSideProps: GetServerSideProps = async () => {
  const restaurants = await fetchRestaurants();

  return {
    props: { restaurants },
  };
};

export default Home;
