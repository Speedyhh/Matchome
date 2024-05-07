import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";

import AboutOne from "@/components/about-one";
import PrivacyPolicy from "@/components/Privacy-Policy";


const Privacy = () => {
    return (
      <MenuContextProvider>
      <Layout PageTitle="Privacy Policy">
        <HeaderOne />
        <PageHeader title="Privacy Policy" name="Privacy " />
        
       <PrivacyPolicy />


        <Footer />
      </Layout>
    </MenuContextProvider>
    );
  };
  
  export default Privacy;