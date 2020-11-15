import React from 'react';
import Link from 'next/link';

export default function LoginForm({ email, setEmail, password, setPassword, handleLogin }) {
    return (
        <div className="box-border h-auto w-2/5">
            <form className="bg-gray-800 shadow-md rounded p-8" onSubmit={handleLogin}>
                <div className="mb-6 text-center">
                    <span className="text-white text-2xl font-semibold">Member Login</span>
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign in
                    </button>
                    <Link href="/register">
                        <a className="inline-block align-baseline font-medium text-sm text-white hover:text-gray-400" href="#">
                            Create account
                        </a>
                    </Link>
                </div>
            </form>
        </div>
    );
}