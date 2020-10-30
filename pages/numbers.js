import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import StoredNumbersForm from '../components/storedNumbersForm';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Numbers() {
    const router = useRouter();

    useEffect(() => {
        // Redirect user to homepage if not logged in
        const jwt = window.sessionStorage.getItem('jwt');
        if (!jwt) {
            Router.push('/');
        }

        // axios.get(productsEndpoint).then((res) => {
        //     setProducts(res.data);
        // });

        // axios.get(categoriesEndpoint).then((res) => {
        //     setCategories(res.data);
        // });

    }, []);

    return (
        <Layout>
            <div className="flex flex-wrap">
                <StoredNumbersForm />
            </div>
        </Layout>
    )
}