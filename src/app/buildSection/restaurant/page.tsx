"use client";

import styles from "../../build.module.css";
import Link from "next/link";
import { useState } from "react";
import Header from "../../components/header";
import axios from "axios";

export default function Restaurant() {
  const [isNewOrder, setIsNewOrder] = useState(false);
  const [file, setFile] = useState<File>();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleNewOrder = () => {
    setIsNewOrder(!isNewOrder);
  };

  const handleImageUpload = (e: any) => {};

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFile(file);

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = function (e: any) {
        console.log(e.target.result);
        setImage(e.target.result);
      };
      fileReader.readAsDataURL(file);
    }

    if (!file) return;

    try {
      const data = new FormData();
      data.set("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error(await res.text());
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div className={styles.mainRestaurant}>
      <Header />

      <div className={styles.userProfile}>
        <div className={styles.userProfileflex}>logo</div>
        <div className={styles.userProfileflex}>BurgerKing</div>
      </div>

      <div className={styles.bodyRestaurant}>
        <div className={styles.containerOrders}>
          {isNewOrder == false && (
            <>
              <div className={styles.newOrderBTN} onClick={handleNewOrder}>
                <h2>New Order</h2>
              </div>
            </>
          )}
        </div>
        <div>
          {isNewOrder && (
            <nav>
              <div className={styles.navbarcontainer}>
                <div className="navbar-toggle" onClick={handleNewOrder}>
                  {isNewOrder && <span className={styles.close}>&times;</span>}
                </div>
                <div className="navbar-content">
                  <div className="navbar-section">
                    <h3>Navbar Title</h3>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className={styles.navbarflexitems}>
                      <input
                        type="file"
                        name="file"
                        placeholder="Enter image"
                        onChange={(e) => setFile(e.target.files?.[0])}
                      />
                      <input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.textInput}
                      />
                      <input
                        type="text"
                        placeholder="Enter Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className={styles.textInput}
                      />
                      <button type="submit">Submit</button>
                      {file && (
                        <img
                          src={URL.createObjectURL(file)}
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </nav>
          )}
        </div>
        <div className={styles.bodyOrders}>
          <div className={styles.containerOrders}>
            {isNewOrder == false && (
              <>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
                <div className={styles.flexOrders}></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
