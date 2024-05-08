import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";

import TimDetailsCopy from "@/components/TimDetailsCopy";




const TimDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Tim Fibra">
        <HeaderOne />
        <PageHeader title="TIM FIBRA" name="Tim Fibra" />
        
        <TimDetailsCopy />

        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default TimDetailsPage;
