import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Review = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const email = user?.email;
    const r = {
      review,
      rating,
      email,
    };
    fetch("https://floating-cliffs-31659.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(r),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("review added");
        } else {
          toast("sorry,something went wrong");
        }
      });
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-xl my-3">Add Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="review"
          rows="4"
          placeholder="review"
          className="border-2 px-2 rounded w-full"
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="rating"
          className="border-2 w-full p-2 rounded"
        />
        <div>
          {" "}
          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-primary btn-outline full my-3"
          />
        </div>
      </form>
    </div>
  );
};

export default Review;
