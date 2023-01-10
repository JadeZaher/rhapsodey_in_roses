import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rhapsodey in Roses</title>
        <meta name="description" content="Romance novel editorial services by Destinee Schriner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>

      <h1 className="font-display sm:text-3xl md:text-5xl lg:text-7xl text-white drop-shadow-colorShadow max-w-[45vw]">
        Welcome To <br/> Rhapsodey in <br/> Roses
      </h1>
      </div>

    </>
  );
};

export default Home;
