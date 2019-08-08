import gql from "graphql-tag";
import { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-apollo";

const Home: NextPage = () => {
  const { loading, data } = useQuery(gql`
    query {
      books {
        title
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
