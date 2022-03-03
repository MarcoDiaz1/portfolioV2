import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "../layout/layout.index";
import CustomMouse from "../components/customMouse";
import MouseContextProvider from "../MouseContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
