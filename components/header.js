import { useRouter } from 'next/router';
import Link from 'next/link';
import LogoutButton from './logoutButton';

export default function Header() {
    const router = useRouter();

    const handleLogout = async (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem('jwt');
        router.push('/');
    }

    return (
        <header className="border-b flex items-center justify-between p-3 shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h1 className="leading-none text-4xl text-left text-grey-darkest pt-2 pl-2">
                    <Link href="/store">
                        <a className="no-underline">
                            Faux Item Shop
                        </a>
                    </Link>
                </h1>
            </div>
            <nav>
                <ul className="list-reset md:flex md:items-center">
                    <li className="md:ml-4">
                        <Link href="/numbers">
                            <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0">Numbers</a>
                        </Link>
                    </li>
                    <li className="md:ml-4">
                        <NavLink label="About" link="#" />
                    </li>
                    <li className="md:ml-4">
                        <NavLink label="Settings" link="#" />
                    </li>
                    <li className="md:ml-4">
                        <LogoutButton handleLogout={handleLogout} />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function NavLink({ label, link }) {
    return <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0" href={link}>{label}</a>
}