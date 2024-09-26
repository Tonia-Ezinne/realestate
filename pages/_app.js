import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // const hideFooterRoutes = ["/404", "/signup", "/signIn"];
  // const hideNavbarRoutes = ["/404", "/signup", "/signIn"];

  // const shouldHideFooter = hideFooterRoutes.includes(router.pathname);
  // const shouldHideNavbar = hideNavbarRoutes.includes(router.pathname);

  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
      {/* Optionally render footer or navbar based on conditions
      {!shouldHideFooter && <Footer />}
      {!shouldHideNavbar && <Navbar />} */}
    </SessionProvider>
  );
}
