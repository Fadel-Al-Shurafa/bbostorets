"use client";

import styles from "../../profile.module.css";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import Loading from "../../components/loading";

export default function UserProfile({ params }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios.get("../api/logout");
      console.log("Logout successful");
      router.push("/signin");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.UserProfile}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1>Profile {params.id}</h1>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
}
