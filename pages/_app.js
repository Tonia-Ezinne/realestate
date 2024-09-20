


// import "@/styles/globals.css";
// import Layout from "@/components/Layout";

// export default function App({ Component, pageProps, router }) {
//   if( router.pathname === '/404'  || router.pathname === '/signup' || router.pathname === '/login'){
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }
// }

import "@/styles/globals.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps, router }) {
  const hideFooterRoutes = ["/404", "/signup", "/signIn"];
  const hideNavbarRoutes = ["/signup", "/signIn"]; // Example: hiding navbar on signup and login

  const shouldHideFooter = hideFooterRoutes.includes(router.pathname);
  const shouldHideNavbar = hideNavbarRoutes.includes(router.pathname);

  return (
    <Layout showNavbar={!shouldHideNavbar} showFooter={!shouldHideFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}

