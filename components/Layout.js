// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//   return (
//     <div className="content">
//       <Navbar />
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;


import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, showNavbar = true, showFooter = true }) => {
  // Add showNavbar and showFooter props
  return (
    <div className="content">
      {showNavbar && <Navbar />} {/* Conditionally render the Navbar */}
      {children}
      {showFooter && <Footer />} {/* Conditionally render the Footer */}
    </div>
  );
};

export default Layout;
