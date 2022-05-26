import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [user1, setUser1] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${email}`, {
      method: "GET",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setUser1(data);
      });
  }, [email]);
  const updateUser = (e) => {
    e.preventDefault();
    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const plink = e.target.plink.value;
    const email = user?.email;
    const name = user.displayName;
    const userInfo = {
      email: email,
      name: name,
      education: education,
      address: address,
      phone: phone,
      profileLink: plink,
    };
    const url = `http://localhost:5000/user/${email}`;
    fetch(url, {
      method: "PUT",
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/dashboard");
        toast("update success");
      });
  };
  return (
    <div className="px-12 m-6 py-6  text-xl shadow-md grid lg:grid-cols-2 md:grid-cols-1">
      <div className="p-3">
        <h2>
          <span className="font-bold">User name:</span> {user?.displayName}
          {user.education}
        </h2>
        <h2>
          <span className="font-bold">Email:</span> {user?.email}
        </h2>
        <h2>
          <span className="font-bold">Education:</span> {user1?.education}
        </h2>
        <h2>
          <span className="font-bold">Location:</span> {user1?.address}
        </h2>
        <h2>
          <span className="font-bold">Contact no:</span> {user1?.phone}
        </h2>
        <h2>
          <span className="font-bold">LinkedIn:</span>{" "}
          <small className="underline cursor-pointer text-blue-400">
            {user1?.profileLink}
          </small>
        </h2>
      </div>
      <div>
        <h2 className="text-xl p-3 text-center font-bold">Update Profile</h2>
        <div className="p-3">
          <form onSubmit={updateUser}>
            <input
              type="text"
              required
              placeholder="Education"
              name="education"
              className="w-full border-2 p-2 mb-2"
            />
            <input
              type="text"
              required
              placeholder="Location"
              name="address"
              className="w-full border-2 p-2 mb-2"
            />
            <input
              type="number"
              required
              placeholder="Contact no"
              name="phone"
              className="w-full border-2 p-2 mb-2"
            />
            <input
              type="text"
              required
              placeholder="Linkedin Profile link"
              name="plink"
              className="w-full border-2 p-2 mb-2"
            />

            <input
              type="submit"
              value="Submit"
              className="w-full btn btn-primary btn-outline"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
