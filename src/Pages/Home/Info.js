import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
        cardTitle="Opening Hours"
      />
      <InfoCard
        bgClass="bg-[#3A4256]"
        img={marker}
        cardTitle="Visit our location"
      />
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
        cardTitle="Contact us now"
      />
    </div>
  );
};

export default Info;
