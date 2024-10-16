import styles from "./page.module.css";
import Image from "next/image";

import image1 from "../../../public/images/image1.jpg";
import image2 from "../../../public/images/image2.jpg";
import image3 from "../../../public/images/image3.png";
import image4 from "../../../public/images/image4.jpg";
import image5 from "../../../public/images/image5.jpg";
import image6 from "../../../public/images/image6.jpg";

export default function Blogs (){
    return(
        <div className={styles.parentContainer}>
            <div className={`${styles.childContainer} tilt-in-fwd-tr`}>
                <div className={styles.imageContainer}><Image src={image1} alt="Save Palistine and Masjid e Aqsa" className={styles.image}></Image></div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}><strong>Israeli-Palestinian Conflict</strong></h1>
                    <br/>
                    <p>Gaza was a part of what was khown as <b>Palestine</b>, prior to the creation of the state of Israel, in 1948. As part of historical Palestine.</p>
                    <button className={styles.button}><a href={"/card1"}>Read more</a></button>
                </div>
            </div>

            <div className={`${styles.childContainer} tilt-in-fwd-tr`}>
                <div className={styles.imageContainer}><Image src={image2} alt="Seven ages of a men" className={styles.image}></Image></div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}><strong>The Seven Ages Of A Men</strong></h1>
                    <br/>
                    <p>Life is a stage, peoples play 7 roles. The stages are: infancy, schoolboy, teenager, young man, middle aged, old aged and dotage & death.</p>
                    <button className={styles.button}><a href={"/card2"}>Read more</a></button>
                    </div>
            </div>

            <div className={`${styles.childContainer} tilt-in-fwd-tr`}>
                <div className={styles.imageContainer}><Image src={image3} alt="SDGs" loading="lazy" className={styles.image}></Image></div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}><strong>Sustainable Development Goals (SDGs)</strong></h1>
                    <br/>
                    <p>These goals, also known as the SDGs, aim to end poverty, protect the
                    planet and ensure prosperity for everyone by 2030.</p>
                    <button className={styles.button}><a href={"/card3"}>Read more</a></button>
                    </div>
            </div>

            <div className={`${styles.childContainer} tilt-in-fwd-tr`}>
                <div className={styles.imageContainer}><Image src={image4} alt="Culture of Pakistan" loading="lazy" className={styles.image}></Image></div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}><strong>Pakistani Culture</strong></h1>
                    <br/>
                    <p>Pakistan, a nation of diverse landscapes and peoples, is home to a rich and multifaceted culture that varies across its different provinces.</p>
                    <button className={styles.button}><a href={"/card4"}>Read more</a></button>
                    </div>
            </div>

            <div className={`${styles.childContainer} tilt-in-fwd-tr`}>
                <div className={styles.imageContainer}><Image src={image5} alt="The Great Visionaries" loading="lazy" className={styles.image}></Image></div>
                <div className={styles.contentContainer}>
                <h1 className={styles.title}><strong>The Great Visionaries</strong></h1>
                <br/>
                <p><strong>The Role of Women in the Pakistan Movement</strong> Women in Pakistan make up 48.76% of the population according to the 2017
                 census of Pakistan.</p>
                <button className={styles.button}><a href={"/card5"}>Read more</a></button>
                </div>
            </div>

            <div className={`${styles.childContainer} tilt-in-fwd-tr`}>
                <div className={styles.imageContainer}><Image src={image6} alt="The future of technology" loading="lazy" className={styles.image}></Image></div>
                <div className={styles.contentContainer}>
                <h1 className={styles.title}><strong>The Future Of Technology</strong></h1>
                <br/>
                <p>Technology has always been a driving force in human progress, shaping
                our societies and reshaping our understanding of the world.</p>
                <button className={styles.button}><a href={"/card6"}>Read more</a></button>
                </div>
            </div>
        </div>
    )
}