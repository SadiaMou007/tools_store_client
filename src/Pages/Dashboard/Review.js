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
    fetch("http://localhost:5000/review", {
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
    <div className="mx-12">
      <h2 className="text-xl my-3">Add Review</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          name="review"
          cols="60"
          rows="4"
          placeholder="review"
          className="border-2 px-2 rounded"
        ></textarea>
        <input
          type="number"
          name="rating"
          placeholder="rating"
          className="border-2 w-1/2 p-2 rounded"
        />
        <div>
          {" "}
          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-primary btn-outline w-1/2 my-3"
          />
        </div>
      </form>
    </div>
  );
};

export default Review;
