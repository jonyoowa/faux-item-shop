import React from 'react';
import Link from 'next/link';

export default function RegisterForm({ username, setUsername, email, setEmail, password, setPassword, createNewAccount }) {
    return (
        <div className="container mx-auto px-64">
            <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={createNewAccount}>

                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                </div>

                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create account</button>
                    <Link href="/">
                        <a className="inline-block align-baseline font-bold text-sm text-red-600 hover:text-red-400">Cancel</a>
                    </Link>
                </div>
            </form>
        </div>
    );
}