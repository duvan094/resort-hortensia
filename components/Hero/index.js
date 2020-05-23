import styles from "./Hero.module.css"


export default function Header() {
  return (
    <div className={styles.hero}>
        <div className={styles.content}>
            <img src="/assets/logo.png" alt="logo" className={styles.logo}/>
        </div>
    </div>
  )
}
