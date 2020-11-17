import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import ProductFilter from '../components/productFilter';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Store() {
    const router = useRouter();

    const productsEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/products`;
    const categoriesEndpoint = `${process.env.NEXT_PUBLIC_HOSTNAME}/categories`;

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");

    const changeSelectedCategory = async (e) => {
        e.preventDefault();
        setSelectedCategory(e.target.value);
    }

    const clearSelectedCategory = async (e) => {
        e.preventDefault();
        setSelectedCategory("");
    }

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
            <div className="flex flex-col items-center py-2">
                <span className="text-4xl font-semibold mb-4">Products</span>
                <ProductFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    changeSelectedCategory={changeSelectedCategory}
                    clearSelectedCategory={clearSelectedCategory}
                />
            </div>
            <div className="flex flex-wrap overflow-hidden pt-4 pb-12">
                {
                    products
                        .filter((product) => selectedCategory !== "" ? product.categories.some(category => category.id.toString() == selectedCategory) : product)
                        .map(product => <ProductCard product={product} key={product.id} />)
                }
            </div>
        </Layout>
    )
}

function ProductCard({ product }) {
    return (
        <div className="m-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 max-w-sm rounded overflow-hidden shadow-lg bg-blue-900 bg-opacity-25">
            <img className="object-scale-down h-48 w-full bg-white" src={product.picture ? `${process.env.NEXT_PUBLIC_HOSTNAME}${product.picture.formats.thumbnail.url}` : ""} />
            <div className="h-24 px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold text-gray-700 mb-2">
                    {(product.price / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                </span>
            </div>
        </div>
    )
}