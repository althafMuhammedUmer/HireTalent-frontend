import React from "react";
import Head from "next/head";
import Script from "next/script";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";

const Layout = ({ children, title = "HireTalent - Admin" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      ></Script>
      <Script
        src="https://kit.fontawesome.com/9edb65c86a.js"
        crossOrigin="anonymous"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"
      ></Script>

      <ToastContainer position="top-right" />

      <Navbar/>
      

      {children}
      <Footer/>

      
    </div>
  );
};

export default Layout;