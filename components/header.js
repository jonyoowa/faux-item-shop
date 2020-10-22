import { useRouter } from 'next/router';
import LogoutButton from './logoutButton';

export default function Header() {
    const router = useRouter();

    const handleLogout = async (e) => {
        e.preventDefault();
        window.sessionStorage.removeItem('jwt');
        router.push('/');
    }

    return (
        <header className="border-b flex items-center justify-between p-4 pb-0 shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <h1 className="leading-none text-2xl text-grey-darkest">
                    <a className="no-underline text-grey-darkest hover:text-black" href="">
                        Faux Item Shop
                    </a>
                </h1>
            </div>
            <nav>
                <ul className="list-reset md:flex md:items-center">
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