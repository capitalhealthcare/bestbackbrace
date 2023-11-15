import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { Roboto, Poppins } from "@next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../store";
import { setProducts } from "../store/slices/product-slice";
import products from "../data/products.json";
import Preloader from "../components/Preloader";
import api from "../lib/api";

import "react-slidedown/lib/slidedown.css";
import "animate.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/style.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const MyApp = ({ Component, ...rest }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get("getproducts");
      if (res.status === 200) {
        if (res && res.data && res.data.allProducts)
          setApiData(res.data.allProducts);
      }
    }
    fetchData();
  }, []);
  const { store, props } = wrapper.useWrappedStore(rest);

  useEffect(() => {
    if (apiData.length > 0) {
      store.dispatch(setProducts(apiData));
    }
  }, [apiData, store]);
  // useEffect(() => {
  //   if (apiData) store.dispatch(setProducts(apiData));
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>Relieve Lower Back Pain With the Best Back Brace</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/assets/images/favicon.ico"
        ></link>

        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Discover our elite range of back braces, meticulously crafted for unparalleled support. Choose BestBackBrace for comfort that stands the test of time"
        />
        {/* <meta
          name="keywords"
          content="ecommerce, electronics store, Fashion store, furniture store,  react, next js, clean, minimal, modern, online store, responsive, retail, shopping, ecommerce store"
        /> */}
      </Head>
      <style jsx global>
        {`
          :root {
            --ff-roboto: ${roboto.style.fontFamily};
            --ff-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader />}>
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
