import styles from './MailList.module.css'

const MailList = () => {
  return (
    <div className={styles.mail}>
        <h1 className={styles.mailTitle}>Save Time, Save money</h1>
        <span className={styles.mailDesc}>Sign up and we'll send the best deals to you</span>
        <div className={styles.inputContiner}>
            <input type="text" placeholder='send Your Email'/>
            <button>Subscrib</button>
        </div>

    </div>
  )
}

export default MailList