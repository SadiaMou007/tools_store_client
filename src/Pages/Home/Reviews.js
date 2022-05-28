import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://floating-cliffs-31659.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

  return (
    <div className="mx-12 my-6 bg-secondary p-4">
      <div>
        <h2 className="text-2xl text-center text-primary">
          {reviews.length} reviews available
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 p-6  rounded">
          {reviews.map((review) => (
            <div key={review._id} className="min-h-48 bg-white rounded">
              <div className="border-secondaty p-3">
                <h3>User: {review.email}</h3>
                <h4>Rating: {review.rating}</h4>
                <h4>{review.review}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
