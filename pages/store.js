import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Store() {
    const router = useRouter();
    const storeEndpoint = ``;

    return (
        <Layout>
            <p>Store page</p>
        </Layout>
    )
}