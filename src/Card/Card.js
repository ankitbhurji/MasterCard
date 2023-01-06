import styles from './Card.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card(props){

    var Number, Name, Month, Cvc, Year;
    let Num=props.CardData.Number 
    let CvcNum = props.CardData.Cvc
    let MonthNum = props.CardData.Month
    let spacedNumber, NumLength, CvcNumLength, MonthLength

    if(Num){
        if(Num.length==16){
            spacedNumber=Num.match(/.{1,4}/g).join(' ');
            NumLength = Num.length;
            CvcNumLength = CvcNum.length;
            MonthLength = MonthNum.length;            
        }else{
            // alert("enter valid card number")
        }
    }


    if((NumLength == 16) && (props.CardData.Name) && (MonthLength==2) && (CvcNumLength == 3)){
        
        Number = spacedNumber
        Name = props.CardData.Name
        Month = props.CardData.Month
        Year = props.CardData.Year
        Cvc = props.CardData.Cvc

        toast.success('Data updated successfuly !', {
            position: toast.POSITION.TOP_CENTER,
            className: 'p-4  bg-light bg-gradient'
        });
 
    }else{
        Number = '0000 0000 0000 0000'
        Name = 'ankit bhurji'
        Month = "12"
        Year = "24"
        Cvc = '009'
    }


    return(
        <div className={styles.card}>
            <div className={styles.front}>
                <p className={styles.cardNumber}>{Number}</p>
                <p className={styles.cardName}>{Name}</p>
                <p className={styles.cardDate}>{Month}/{Year}</p>
            </div>
            <div className={styles.back}>
                <p className={styles.magnet}></p>
                <p className={styles.cardCvc}>{Cvc}</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Card