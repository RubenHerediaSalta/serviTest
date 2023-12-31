import "../globals.css";

import Head from "next/head";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { StateProvider } from "../context/StateContext";
import reducer, { initialState } from "../context/StateReducers";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [cookies] = useCookies();
  useEffect(() => {
    // if (
    //   router.pathname.includes("/seller") ||
    //   router.pathname.includes("/buyer")
    // ) {
    //   if (!cookies.jwt) {
    //     router.push("/");
    //   }
    // }
  }, [cookies, router]);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Servify</title>
      </Head>
      <div className="relative flex flex-col h-screen justify-between">
        <Navbar />
        <div
          className={`mb-auto w-full mx-auto ${router.pathname !== "/" ? "mt-5" : ""}`}
        >
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </StateProvider>
  );
}
