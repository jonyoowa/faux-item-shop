import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { useRouter } from 'next/router';

export default function Success() {
    const router = useRouter();

    useEffect(() => {
        const jwt = window.sessionStorage.getItem("jwt");
        if (!jwt) {
            router.push("/");
        }
    }, []);

    const handleLogout = async (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem('jwt');
        router.push('/');
    }

    return (
        <Layout>
            <h1>Login Successful!</h1>
            <form onSubmit={handleLogout}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign out</button>
            </form>
        </Layout>
    )
}
