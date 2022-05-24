import React from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import Banner from "./Banner";
import ContactBanner from "./ContactBanner";
import Info from "./Info";
import Services from "./Services";
import SingleCard from "./SingleCard";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <SingleCard />
      <AppointmentBanner />
      <Testimonials />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default Home;
