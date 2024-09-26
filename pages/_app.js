// pages/_app.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router"; // Import useRouter

export default function App({ Component, pageProps }) {
  const router = useRouter(); // Use the router to get the current path

  // Define routes where navbar and footer should be hidden
  const hideFooterRoutes = ["/404", "/signup", "/signIn"];
  const hideNavbarRoutes = ["/404", "/signup", "/signIn"]; // Add "/404" here

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
