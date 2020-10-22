import Head from 'next/head';
import Link from 'next/link';
import Header from './header';
import styles from './layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Faux Item Shop" />
            </Head>
            <Header />
            <main>{children}</main>
        </div>
    )
}
