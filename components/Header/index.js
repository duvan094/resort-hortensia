import Head from 'next/head'
import styles from "./Header.module.css"


export default function Header() {
  return (
    <>
      <Head>
        <title>Resort Hortensia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={"wrapper " + styles.wrapper}>
            <img src="/assets/logo.png" alt="logo" className={styles.logo}/>
            <nav className={styles.nav}>
                <ul>
                    <li>nav 1</li>
                    <li>nav 2</li>
                    <li>nav 3</li>
                    <li>nav 4</li>
                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}
