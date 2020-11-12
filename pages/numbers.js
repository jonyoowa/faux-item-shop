import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import StoredNumbersForm from '../components/storedNumbersForm';
import StoredNumbersTable from '../components/storedNumbersTable';
import axios from 'axios';

export default function Numbers() {
    const storedNumbersEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/stored-numbers`;

    const [showTable, setShowTable] = useState(false);
    const [number, setNumber] = useState(0);
    const [storedNumbers, setStoredNumbers] = useState();

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

        axios.get(storedNumbersEndpoint).then((res) => {
            setStoredNumbers(res.data);
        });
    }, [showTable]);

    return (
        <Layout>
            <div className="flex flex-wrap">
                {
                    showTable ?
                        <StoredNumbersTable setShowTable={setShowTable} storedNumbers={storedNumbers} /> :
                        <StoredNumbersForm storeNumber={storeNumber} setShowTable={setShowTable} number={number} setNumber={setNumber} />
                }
            </div>
        </Layout>
    )
}