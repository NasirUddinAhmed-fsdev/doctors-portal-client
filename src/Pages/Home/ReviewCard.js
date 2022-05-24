import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="card xl:max-w-xl bg-base-100 shadow-xl">
      <div className="card-body gap-y-5 py-5">
        <p>
          It is a long established fact that by the readable content of a lot
          layout. The point of using Lorem a more-or-less normal distribu to
          using Content here, content
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h3>{review.name}</h3>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
