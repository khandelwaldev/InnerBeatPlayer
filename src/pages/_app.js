import "~/styles/tailwind.css";
import Layout from "~/components/Layout";

export default function InnerBeat({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
