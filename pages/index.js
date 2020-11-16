import React, { useState, useEffect } from 'react';

import Head from 'next/head'
import Layout from '../components/layout';
import LoginForm from '../components/loginForm';
import styles from '../components/layout.module.css';

import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

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
      <div className="w-full min-h-screen p-16">
        <div className="justify-center flex mb-12">
          <span className="text-5xl font-semibold">Welcome to the Faux Item Shop</span>
        </div>
        <div className="justify-center items-center flex flex-wrap">
          <div className="rounded-lg bg-white h-auto w-3/5 flex flex-wrap justify-around px-8 py-24">
            <div className="flex-none h-auto w-1/4">
              <Image src="/undraw_Online_shopping_re_k1sv.svg" width={249} height={338} alt="Online shopping" />
            </div>
            <LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  )
}
