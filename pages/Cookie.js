import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";

import AboutOne from "@/components/about-one";
import CookiePolicy from "@/components/cookie-policy";



const Cookie = () => {
    return (
      <MenuContextProvider>
      <Layout PageTitle="Coookie Policy">
        <HeaderOne />
        <PageHeader title="Coookie Policy" name="Coookie " />
        
       <CookiePolicy />


        <Footer />
      </Layout>
    </MenuContextProvider>
    );
  };
  
  export default Cookie;