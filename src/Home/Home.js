import styles from './Home.module.css'
import Form from '../Form/Form';



function Home(){

    return(
        <div>
            <div>
                <div className={styles.home_2}>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Home;