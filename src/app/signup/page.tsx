"use client";

import React from "react";
import styles from "../registration.module.css";
import Link from "next/link";
import Header from "../components/header";
import { useRouter } from "next/navigation";
import { useState, useEffect} from "react";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [Confgpassword, setConfgPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const onSignup = async (e: any) => {
    e.preventDefault();

    console.log("onSignup function executed");
    try {
      const response = await axios.post("/api/signup", user);
      console.log("Signup success", response.data);
      router.push("/signin");
    } catch (error: any) {
      console.log("Error occurred during sign-up:", error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <Header />

      <div className={styles.mainRegistration}>
        <div className={styles.RegistrationComponent}>
          <form onSubmit={onSignup}>
            <br />
            <div className={styles.RegistrationComponentHeader}>
              {" "}
              Registration{" "}
            </div>
            <div className={styles.RegistrationComponentContainer}>
              <div className={styles.RegistrationComponentFlex}>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  required
                  placeholder="Full name"
                />
              </div>
              <div className={styles.RegistrationComponentFlex}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  required
                  placeholder="Email"
                />
              </div>
              <div className={styles.RegistrationComponentFlex}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  required
                  placeholder="Password"
                />
              </div>
              <div className={styles.RegistrationComponentFlex}>
                <input
                  type="password"
                  id="Confgpassword"
                  name="Confgpassword"
                  value={Confgpassword}
                  onChange={(e) => setConfgPassword(e.target.value)}
                  required
                  placeholder="Confg Password"
                />
              </div>
            </div>
            <div className={styles.RegistrationComponentBTN}>
              {" "}
              <button type="submit">
                {buttonDisabled ? "No Signup" : "Signup"}
              </button>
            </div>
            <Link href="/signin">
              <div className={styles.RegistrationComponentToSginin}>
                {" "}
                I have account{" "}
              </div>
            </Link>
            <div className={styles.RegistrationComponentFooter}></div>
          </form>
        </div>
      </div>
    </>
  );
}
