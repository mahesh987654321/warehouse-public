import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import OfficeDetails from "../OfficeDetails/OfficeDetails";
import Services from "../Services/Services";
import TopSell from "../TopSell/TopSell";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <OfficeDetails></OfficeDetails>
      <TopSell></TopSell>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
