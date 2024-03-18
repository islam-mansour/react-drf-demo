import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Profile = ({ setUserState, name }) => {
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8000/user/logout/", {withCredentials: true}).then((res) => {
      setUserState({});
      navigate("/login", { replace: true });
    });
  };

  useEffect(() => {

    if (name == null){
      navigate("/login", { replace: true });
    }

  }, []);
  return (
    <div className="profile">
      <h1 style={{ color: "white" }}>Welcome {name} !!</h1>
      <button
        className={basestyle.button_common}
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};
export default Profile;
