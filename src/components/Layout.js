import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({
  children,
  campaignIdeasRef,
  metricMeasuresRef,
  createCampaignRef,
  homeRef,
}) => {
  return (
    <div>
      <Nav
        campaignIdeasRef={campaignIdeasRef}
        metricMeasuresRef={metricMeasuresRef}
        createCampaignRef={createCampaignRef}
        homeRef={homeRef}
      />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
