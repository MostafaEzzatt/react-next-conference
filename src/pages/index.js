import Head from "next/head";
import Hero from "../components/hero";
import Speakers from "../components/speakers";
import Agenda from "../components/agenda";
import Accommodation from "../components/accommodation";
import Cta from "../components/cta";
import AppFooter from "../components/footer";

import { useAuth } from "../hooks/useAuth";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="ReactNext Is a react conference" />
        <link rel="icon" href="/conf-fav.ico" />
      </Head>

      <Hero />
      <Speakers />
      <Agenda />
      <Accommodation />
      <Cta />
      <AppFooter />
    </>
  );
}
