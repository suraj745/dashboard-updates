import "../styles/globals.scss";
import Layout from "../layout/Layout";
import "antd/dist/antd.css";
import { createContext } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
