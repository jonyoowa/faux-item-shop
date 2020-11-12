import React, { useState, useEffect } from 'react';

import Head from 'next/head'
import Layout from '../components/layout';
import RegisterForm from '../components/registerForm';
import styles from '../components/layout.module.css';

import axios from 'axios';
import { useRouter } from 'next/router';

export default function Register() {
    const router = useRouter();
    const registerEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/auth/local/register`;

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createNewAccount = async (e) => {
        e.preventDefault();
        axios
            .post(registerEndpoint, {
                username,
                email,
                password,
            })
            .then(res => {
                window.sessionStorage.setItem("jwt", res.data.jwt);
                router.push("/store");
            })
            .catch(err => {
                console.log(`An error has occured: ${err}`);
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
            <RegisterForm
                username={username}
                setUsername={setUsername}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                createNewAccount={createNewAccount}
            />
        </div>
    )
}
