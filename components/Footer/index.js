import styles from "./Footer.module.css"


export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={"wrapper " + styles.wrapper}>
            <small>Copyright {new Date().getFullYear() } © Resort Hortenisa</small>
        </div>
      </footer>
    </>
  )
}
