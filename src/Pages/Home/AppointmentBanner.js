import React from "react";
import Appointment from "../../assets/images/appointment.png";
import Doctor from "../../assets/images/doctor.png";
import FocusButton from "../Shared/FocusButton";
const AppointmentBanner = () => {
  return (
    <section
      style={{ background: `url(${Appointment})` }}
      className="flex justify-center items-center px-6 xl:px-12 my-64"
    >
      <div className="flex-1 hidden xl:block">
        <img className="-mt-28" src={Doctor} alt="" />
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-xl text-secondary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-6">Make an Appointment Today</h2>
        <p className="text-white pb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <FocusButton>Get Started</FocusButton>
      </div>
    </section>
  );
};

export default AppointmentBanner;
