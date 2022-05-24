import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card xl:max-w-xl bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-error">No Slots Available.</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          {slots.length === 0 ? (
            <button disabled className="btn btn-secondary">
              Book Appointment
            </button>
          ) : (
            <label
              htmlFor="booking-modal"
              onClick={() => setTreatment(service)}
              className="btn btn-secondary bg-gradient-to-r from-secondary to-primary text-white"
            >
              Book Appointment
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
