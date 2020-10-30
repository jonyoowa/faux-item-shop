import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import StoredNumbersForm from '../components/storedNumbersForm';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Numbers() {
    const router = useRouter();
    const storedNumbersEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}:${process.env.NEXT_PUBLIC_PORT}/stored-numbers`;

    const [showTable, setShowTable] = useState(false);
    const [number, setNumber] = useState(0);

    const storeNumber = async (e) => {
        e.preventDefault();
        axios
            .post(storedNumbersEndpoint, {
                storedValue: number,
            })
            .then(res => {
                console.log(res.data);
                console.log("Successfully stored number");
            })
            .catch(err => {
                let errH = JSON.stringify(err.response);
                console.log(`An error has occured: ${errH}`);
            })
        setNumber(0);
    }

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
                {showTable ? <StoredNumbersTable /> : <StoredNumbersForm storeNumber={storeNumber} setShowTable={setShowTable} number={number} setNumber={setNumber} />}
            </div>
        </Layout>
    )
}