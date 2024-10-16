import styles from "./page.module.css"
export default function Contact(){
    return(
        <div className={styles.parentdiv}>
            <div className={styles.contacts}>
                <h1 className={styles.title}>Contacts</h1>
                    <ul>
                        <li><a href="mailto:jiyaprincess2905@gmail.com" className={styles.links}>Email</a></li>
                        <li><a href="https://www.linkedin.com/in/javeria-zabit-2594472b7" target="_blank" className={styles.links}>LinkedIn</a></li>
                        <li><a href="https://github.com/jiyakhan098" target="_blank" className={styles.links}>Github</a></li>
                    </ul>
            </div>
          
           <hr/>
           
            <div className={styles.feedback}>

            <p>If you like my any blog page. Enter yours comments!</p>
                <form method="post" action="mailto:rehankhanjan72@gmial.com">
                    <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Feedback</legend>

                    <label className={styles.label}>Name:</label>
                    <input className={styles.input} type="text" name="name" id="name" placeholder="Enter your name" required />
                    <br/>
                    
                    <label className={styles.label}>Comments:</label>
                    
                    <textarea className={styles.textarea} placeholder="Enter your comments!" rows={3} cols={30} required ></textarea> 

                    </fieldset>
                    <br/>
                    <button type="submit" className={styles.button}><b>Send feedback</b></button>

                </form>
            </div>
        </div>
    )
}