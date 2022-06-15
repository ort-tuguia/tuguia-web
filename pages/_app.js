import Layout from "../components/layout/layout";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps}>
        <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
