import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import styles from './layout.module.css';

export default function StoredNumbersForm() {

    return (
        <div className="container mx-auto px-64">
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={() => console.log("test")}>
            </form>
        </div>
    )
}