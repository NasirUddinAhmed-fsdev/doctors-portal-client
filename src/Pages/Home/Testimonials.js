import React from "react";
import Quote from "../../assets/icons/quote.svg";
import People1 from "../../assets/images/people1.png";
import People2 from "../../assets/images/people2.png";
import People3 from "../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review: "",
      location: "Houston",
      img: People1,
    },
    {
      _id: 2,
      name: "Winson Herry",
      review: "",
      location: "Houston",
      img: People2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      review: "",
      location: "Houston",
      img: People3,
    },
  ];

  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-secondary font-bold">Testimonial</h3>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <div>
          <img src={Quote} className="xl:w-48 w-24" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
