import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Store() {
    const router = useRouter();

    const productsEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/products`;
    const categoriesEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/categories`;
    // const productsEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}:${process.env.NEXT_PUBLIC_PORT}/products`;
    // const categoriesEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}:${process.env.NEXT_PUBLIC_PORT}/categories`;

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Redirect user to homepage if not logged in
        const jwt = window.sessionStorage.getItem('jwt');
        if (!jwt) {
            Router.push('/');
        }

        axios.get(productsEndpoint).then((res) => {
            setProducts(res.data);
        });

        axios.get(categoriesEndpoint).then((res) => {
            setCategories(res.data);
        });

    }, []);

    return (
        <Layout>
            <div className="flex flex-wrap">
                {products.map(product => <ProductCard product={product} key={product.id} />)}
            </div>
        </Layout>
    )
}

function ProductCard({ product }) {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={product.picture ? `${process.env.NEXT_PUBLIC_HOSTNAME}${product.picture.formats.thumbnail.url}` : ""} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">{product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price} cents</span>
            </div>
        </div>
    )
}