import "../styles/globals.scss";
import Layout from "../layout/Layout";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
