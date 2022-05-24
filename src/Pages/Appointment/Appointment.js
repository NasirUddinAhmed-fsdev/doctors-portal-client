import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AvailableAppointment from "./AvailableAppointment";
import BgBanner from "./BgBanner";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <BgBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;
