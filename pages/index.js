import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import CtaOne from "@/components/cta-one";
import Script from "next/script";

import ContactOne from "@/components/contact-one";
const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Script src="https://chatling.ai/js/embed.js" />
      <Layout PageTitle="Home Page">
        <HeaderOne />
        <SliderOne />
        <div id="feature">
          <div
            className="hero-section-title text-center"
            style={{ marginTop: "5%", marginBottom: "-3%" }}
          >
            <h1>SCEGLI L'OFFERTA E RISPARMIA</h1>
          </div>
          <FeatureOne />
        </div>
        <AboutOne />

        <ServiceOne />

        <CtaOne />

        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
