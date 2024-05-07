import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";


import Footer from "@/components/footer";
import ContactMain from "@/components/contact-main";
import ContactOne from "@/components/contact-one";

const Contact = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Contact Page">
        <HeaderOne />
        <PageHeader title="Contact Us" name="Contact" />

        <ContactOne />
     
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Contact;
