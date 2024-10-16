import styles from "./page.module.css";
export default function About(){
    return(
    <div className={styles.parent}>
    <div className={styles.contentChild}>
      Hi,
      <br/>
      My name is <span className={styles.name}>Javeria</span>
      <br/>
      I wanted to become a Next JS developer.
    </div>
   </div>
    )
}