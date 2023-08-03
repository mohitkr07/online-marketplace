import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Nav from '../utils/header'

const Profile = () => {
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editMobile, setEditMobile] = useState(false);

  const [profileInfo, setInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setInfo({ ...profileInfo, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const setEdit = (e) => {
    if (e.target.name == "personal") setEditName(!editName);
    else if (e.target.name == "email") setEditEmail(!editEmail);
    else if (e.target.name == "mobile") setEditMobile(!editMobile);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("/api/user", {
      method: "get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setInfo(data.user);
  };

  const updateData = async () => {
    const res = await fetch("/api/user", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileInfo),
    });

    const data = await res.json();
    console.log(data);
  };

  const handleSave = (e) => {
    updateData();
    setEdit(e);
  };

  return (
    <>
      <Nav />
      <div className={styles["profile"]}>
        <div className={styles["panel"]}>
          <div className={styles["profile-card"]}>
            <div className={styles["emote"]}>
              <img src="images/profile/male1.svg"></img>
            </div>
            <div className={styles["info"]}>
              <p style={{ fontSize: "75%" }}>Hello,</p>
              <p style={{ fontWeight: "bold" }}>{profileInfo.firstName}</p>
            </div>
          </div>
          <div className={styles["settings"]}>
            <div className={styles["account-settings"]}>
              <h3>
                <i
                  style={{ color: "#068FFF", fontSize: "1.2rem" }}
                  className="fa-solid fa-user"
                ></i>
                Account Settings
              </h3>
              <div className={styles["account-options"]}>
                <span>Profile Information</span>
                <span>Setting</span>
              </div>
            </div>
            <div className={styles["log-out"]}>
              <i
                style={{ color: "#068FFF", fontSize: "1.2rem" }}
                className="fa-solid fa-power-off"
              ></i>
              <h3>Logout</h3>
            </div>
          </div>
        </div>

        {/* Display */}
        <div className={styles["display"]}>
          <div className={styles["personal-information"]}>
            <div className={styles["personal-title"]}>
              <h3 className={styles["personal-title"]}>Personal Information</h3>
              <a
                className={styles["edit-button"]}
                name="personal"
                onClick={setEdit}
              >
                {editName ? "Cancel" : "Edit"}
              </a>
            </div>
            <div className={styles["user-name"]}>
              <input
                disabled={!editName}
                type="text"
                className={styles["common-p"]}
                name="firstName"
                value={profileInfo.firstName}
                onChange={handleChange}
              />
              <input
                disabled={!editName}
                type="text"
                className={styles["common-p"]}
                value={profileInfo.lastName}
                onChange={handleChange}
                name="lastName"
              />

              {/* personal save button */}
              {editName ? (
                <input
                  className={styles["save-button"]}
                  type="button"
                  value="Save"
                  name="personal"
                  onClick={handleSave}
                />
              ) : null}
            </div>
            <div className={styles["gender-title"]}>
              <p>Your Gender</p>
            </div>
            <div className={styles["user-gender"]}>
              <span style={!editName ? { color: "#6c6c6c" } : null}>
                <input
                  disabled={!editName}
                  type="radio"
                  onChange={handleChange}
                  value="Male"
                  checked={profileInfo.gender == "Male"}
                  name="gender"
                />
                Male
              </span>
              <span style={!editName ? { color: "#6c6c6c" } : null}>
                <input
                  disabled={!editName}
                  type="radio"
                  onChange={handleChange}
                  value="Female"
                  checked={profileInfo.gender == "Female"}
                  name="gender"
                />
                Female
              </span>
            </div>

            {/* email */}
          </div>
          <div className={styles["email"]}>
            <div className={styles["email-title"]}>
              <h3 className={styles["personal-title"]}>Email Address</h3>
              <a className={styles["edit-button"]} name="email" onClick={setEdit}>
                {editEmail ? "Cancel" : "Edit"}
              </a>
            </div>
            <div className={styles["email-address"]}>
              <input
                disabled={!editEmail}
                className={styles["common-p"]}
                value={profileInfo.email}
                name="email"
                onChange={handleChange}
              />

              {/* email save button */}
              {editEmail ? (
                <input
                  className={styles["save-button"]}
                  type="button"
                  value="Save"
                  name="email"
                  onClick={handleSave}
                />
              ) : null}
            </div>

            {/* mobile */}
          </div>
          <div className={styles["mobile"]}>
            <div className={styles["mobile-title"]}>
              <h3 className={styles["personal-title"]}>Mobile Number</h3>
              <a
                className={styles["edit-button"]}
                name="mobile"
                onClick={setEdit}
              >
                {editMobile ? "Cancel" : "Edit"}
              </a>
            </div>
            <div className={styles["mobile-number"]}>
              <input
                disabled={!editMobile}
                className={styles["common-p"]}
                value={profileInfo.mobile}
                name="mobile"
                onChange={handleChange}
              />
              {/* mobile save button */}
              {editMobile ? (
                <input
                  className={styles["save-button"]}
                  type="button"
                  value="Save"
                  name="mobile"
                  onClick={handleSave}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
