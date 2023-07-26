import React from "react";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles["profile"]}>
      <div className={styles["panel"]}>
        <div className={styles["profile-card"]}>
          <div className={styles["emote"]}>
            <img src="images/profile/male1.svg"></img>
          </div>
          <div className={styles["info"]}>
            <p style={{ "font-size": "75%" }}>Hello,</p>
            <p style={{ "font-weight": "bold" }}>Mohit</p>
          </div>
        </div>
        <div className={styles["settings"]}>
          <div className={styles["account-settings"]}>
            <h3>
              <i style={{color: "#068FFF", "font-size": "1.2rem"}} class="fa-solid fa-user"></i>Account Settings
            </h3>
            <div className={styles["account-options"]}>
              <span>Profile Information</span>
              <span>Setting</span>
            </div>
          </div>
          <div className={styles["log-out"]}>
            <i style={{color: "#068FFF", "font-size": "1.2rem"}} class="fa-solid fa-power-off"></i>
            <h3>Logout</h3>
          </div>
        </div>
      </div>

      <div className={styles["display"]}>
        <div className={styles["personal-information"]}>
          <div className={styles["personal-title"]}>
            <h3 className={styles["personal-title"]}>Personal Information</h3>
            <a className={styles["edit-button"]}>Edit</a>
          </div>
          <div className={styles["user-name"]}>
            <p className={styles["common-p"]}>Mohit</p>
            <p className={styles["common-p"]}>Arya</p>
          </div>
          <div className={styles["gender-title"]}>
            <p>Your Gender</p>
          </div>
          <div className={styles["user-gender"]}>
            <span>
              <input type="radio"></input>Male
            </span>
            <span>
              <input type="radio"></input>Female
            </span>
          </div>
        </div>
        <div className={styles["email"]}>
          <div className={styles["email-title"]}>
            <h3 className={styles["personal-title"]}>Email Address</h3>
            <span className={styles["edit-button"]}>Edit</span>
          </div>
          <div className={styles["email-address"]}>
            <p className={styles["common-p"]}>makeduspike@gfsflsdjkfksdamail.com</p>
          </div>
        </div>
        <div className={styles["mobile"]}>
          <div className={styles["mobile-title"]}>
            <h3 className={styles["personal-title"]}>Mobile Number</h3>
            <span className={styles["edit-button"]}>Edit</span>
          </div>
          <div className={styles["mobile-number"]}>
            <p className={styles["common-p"]}>+917878441090</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
