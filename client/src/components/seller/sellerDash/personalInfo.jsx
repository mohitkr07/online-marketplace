import { React, useState } from "react";
import styles1 from "./sellerDash.module.css"
import styles from "../sellerAuth/sellerAuth.module.css"

const PersonalInfo = () => {
    const [editName, setName] = useState(false);
    const [editEmail, setEmail] = useState(false);
    const [editMobile, setMobile] = useState(false);
    const [editAddress, setAddress] = useState(false);
    
    const [sellerInfo, setSellerInfo] = useState({
      name: "",
      email: "",
      mobile: "",
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      },
      password: "",
    });
  
    const handleChange = (e) => {
      setSellerInfo({ ...sellerInfo, [e.target.name]: e.target.value });
      console.log(e.target.value);
    };
    const handleAddress = (e) => {
      setSellerInfo({
        ...sellerInfo,
        address: {
          ...sellerInfo.address,
          [e.target.name]: e.target.value,
        },
      });
      console.log(sellerInfo.address[e.target.name]);
    };
    // const handleEdit = () => {
      
    // };
  
    const postData = async () => {
      const res = await fetch("/seller/register", {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sellerInfo),
      });
  
      const data = await res.json();
      console.log(data);
    };
  
    return (
      <div style={{margin: "0", paddingTop: 0, minWidth: "40rem"}} className={styles["register"]}>
        <div style={{marginTop: 0}} className={styles["title"]}>
          <h2 style={{textAlign: "left"}}>Personal Info</h2>
        </div>
        <span className={`${styles["span"]} ${styles1["span"]}`}>
          <p>Name: </p>
          <input
            type="text"
            style={{ flexGrow: "100" }}
            name="name"
            value={sellerInfo.name}
            onChange={handleChange}
            
          />
          <p style={{fontWeight: "lighter"}} className={styles1["edit"]}>Edit</p>
        </span>
        <span className={styles["span"]}>
          <p>Email: </p>
          <input
            type="text"
            style={{ flexGrow: "100" }}
            name="email"
            value={sellerInfo.email}
            onChange={handleChange}
          />
          <p style={{fontWeight: "lighter"}} className={styles1["edit"]}>Edit</p>
        </span>
        <span className={styles["span"]}>
          <p>Phone: </p>
          <input
            type="text"
            style={{ flexGrow: "100" }}
            name="mobile"
            value={sellerInfo.mobile}
            onChange={handleChange}
          />
          <p style={{fontWeight: "lighter"}} className={styles1["edit"]}>Edit</p>
        </span>
        <span className={styles["address"]}>
          <p>Address:</p>
          <span>
            <input
              className={styles["street"]}
              type="text"
              placeholder="street/building"
              name="street"
              value={sellerInfo.address.street}
              onChange={handleAddress}
            />
            <input
              className={styles["city"]}
              type="text"
              placeholder="city"
              name="city"
              value={sellerInfo.address.city}
              onChange={handleAddress}
            />
            <input
              className={styles["state"]}
              type="text"
              placeholder="state"
              name="state"
              value={sellerInfo.address.state}
              onChange={handleAddress}
            />
            <input
              className={styles["postal-code"]}
              type="text"
              placeholder="postal code"
              name="postalCode"
              value={sellerInfo.address.postalCode}
              onChange={handleAddress}
            />
            <input
              className={styles["country"]}
              type="text"
              placeholder="country"
              name="country"
              value={sellerInfo.address.country}
              onChange={handleAddress}
            />
          </span>
          <p style={{fontWeight: "lighter"}} className={styles1["edit"]}>Edit</p>
        </span>
        {/* <span className={styles["span"]}>
          <p>Password: </p>
          <input
            type="password"
            style={{ flexGrow: "100" }}
            name="password"
            value={sellerInfo.password}
            onChange={handleChange}
          />
        </span> */}
        {/* <span
          style={{ display: "flex", justifyContent: "flex-end" }}
          className={styles["span"]}
        >
          <button className={styles["submit-btn"]} onClick={handleSubmit}>
            Edit
          </button>
        </span> */}
      </div>
    );
  };
  
  export default PersonalInfo;