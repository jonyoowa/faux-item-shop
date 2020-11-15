import React, { useState, useEffect } from 'react';

import Head from 'next/head'
import Layout from '../components/layout';
import LoginForm from '../components/loginForm';
import styles from '../components/layout.module.css';

import axios from 'axios';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const loginEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/auth/local`;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post(loginEndpoint, {
        identifier: email,
        password: password,
      })
      .then(res => {
        window.sessionStorage.setItem("jwt", res.data.jwt);
        router.push("/store");
      })
      .catch(err => {
        let errH = JSON.stringify(err.response);
        console.log(`An error has occured: ${errH}`);
      })
  }

  useEffect(() => {
    const jwt = window.sessionStorage.getItem("jwt");
    if (jwt) {
      router.push("/store");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-16">

        {/* <h1>
          Welcome to the Faux Item Shop
        </h1> */}

        <div className="rounded-lg bg-white h-auto w-3/5 flex flex-wrap justify-around px-8 py-24">
          <div className="flex-none h-auto w-1/4 bg-red-500"></div>
          <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} />
        </div>
      </div>
    </div>
  )
}
