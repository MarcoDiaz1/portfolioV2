import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

import Layout from "../layout/layout.index";
import CustomMouse from "../components/customMouse";
import MouseContextProvider from "../MouseContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ParallaxProvider>
        <MouseContextProvider>
          <CustomMouse />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MouseContextProvider>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default MyApp;
