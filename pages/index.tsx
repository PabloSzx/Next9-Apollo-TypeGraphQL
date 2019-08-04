import gql from "graphql-tag";
import { NextPage } from "next";
import Head from "next/head";

import { useQuery } from "@apollo/react-hooks";

const Home: NextPage = () => {
  const { loading, data } = useQuery(gql`
    query {
      books {
        title
        author
      }
    }
  `);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <p>{!loading && JSON.stringify(data, null, 4)}</p>
      </div>
    </>
  );
};

export default Home;
