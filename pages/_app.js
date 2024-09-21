// pages/_app.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, router }) {
  const hideFooterRoutes = ["/404", "/signup", "/signIn"];
  const hideNavbarRoutes = ["/signup", "/signIn"]; // Example: hiding navbar on signup and login

  const shouldHideFooter = hideFooterRoutes.includes(router.pathname);
  const shouldHideNavbar = hideNavbarRoutes.includes(router.pathname);

  return (
    <SessionProvider session={pageProps.session}>
      <Layout showNavbar={!shouldHideNavbar} showFooter={!shouldHideFooter}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
