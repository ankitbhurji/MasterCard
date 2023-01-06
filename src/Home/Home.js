import styles from './Home.module.css'
import Form from '../Form/Form';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

function Home(){

    const [CardData, setCardData] = useState('');

    return(
        <div>
            <div>
                <div className={styles.home_1}>
                    <Card CardData={CardData}/>
                </div>
                
                <div className={styles.home_2}>
                    <Form setCardData={setCardData}/>
                </div>
            </div>
            
            
        </div>
    );
}

export default Home;