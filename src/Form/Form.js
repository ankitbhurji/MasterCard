import { useState } from 'react';
import styles from './Form.module.css';

function Form(props){

    function WarningClick(){
        let CardName = document.getElementById('CardName').value;
        let CardNumber = document.getElementById('CardNumber').value
        let CardCvc = document.getElementById('CardCvc').value
        let CardMonth = document.getElementById('CardMonth').value
        let CardYear = document.getElementById('CardYear').value
        let flag = 1;

        if(CardName === ''){
            document.getElementById('CardNameWarning').innerHTML = "Cardholder name required"
            flag = 0 ;
        }else{
            document.getElementById("CardNameWarning").innerHTML = " ";
            flag = 1;
          }
        
        if(CardNumber === ''){
            document.getElementById("CardNumberWarning").innerHTML = "Card number required";
            flag = 0;
        }else if(CardNumber.length < 16 || CardNumber.length > 16){
            document.getElementById('CardNumberWarning').innerHTML = 'Card number must have 16 digit'
        }
        else{
            document.getElementById("CardNumberWarning").innerHTML = " ";
            flag = 1;
        }

        if(CardCvc === ''){
            document.getElementById("CardCvcWarning").innerHTML = "CVC required";
            flag = 0;
        }else{
            if(CardCvc.length<3 || CardCvc.length>3){
                document.getElementById("CardCvcWarning").innerHTML = 'CVC must have 3 digit'
            }else{
                document.getElementById("CardCvcWarning").innerHTML = " ";
                flag = 1;
            }
            
        }

        // if(CardMonth==='' || CardYear===''){
        //     document.getElementById("CardMonthWarning").innerHTML = 'Enter Month'
        //     document.getElementById("CardYearWarning").innerHTML = "Enter Month"
        // }

        if(CardMonth===''){
            document.getElementById("CardMonthWarning").innerHTML = 'Enter Month'
            flag = 0 ;
        }else{
            if(CardMonth.length>2 || CardMonth.length<2){
                document.getElementById("CardMonthWarning").innerHTML = 'Enter 2 digit only'
            }else{
                document.getElementById("CardMonthWarning").innerHTML = ' '
                flag = 1;
            }
            
          }
        
        if(CardYear===''){
            document.getElementById("CardYearWarning").innerHTML = 'Enter Year'
            flag = 0 ;
        }else{
            if(CardYear.length<2 || CardYear.length>2){
                document.getElementById('CardYearWarning').innerHTML = 'Enter 2 digit only'
            }else{
                document.getElementById("CardYearWarning").innerHTML = ' '
                flag = 1;
            }
            
          }

        

        if(flag){
            return true;
          }
          else{
            return false;
          }    
    }


    const [CardName, setCardName] = useState('');
    const [CardNumber, setCardNumber] = useState('');
    const [CardMonth, setCardMonth] = useState('');
    const [CardYear, setCardYear] = useState('');
    const [CardCvc, setCardCvc] = useState('');

    function ClearStates(){
        setCardName('');
        setCardNumber('');
        setCardMonth('');
        setCardYear('');
        setCardCvc('')
    }

    function FormClick(e){
        e.preventDefault();
        // console.log(CardName, CardNumber, CardMonth, CardYear, CardCvc);
        props.setCardData({
            Name: CardName,
            Number: CardNumber, 
            Month: CardMonth,
            Year: CardYear,
            Cvc: CardCvc
        })

        ClearStates();
    }



    return(
        <div className={styles.form}>
            <form onSubmit={FormClick}>
                <div>
                    <label>CARD HOLDER NAME</label><br/>
                    <input name='cardNumber' value={CardName} onChange={(e)=>{setCardName(e.target.value)}} id='CardName' className='col-7' type='text' placeholder='eg. ANKIT BHURJI' required/>
                    <p id='CardNameWarning'></p>
                </div>
                <div>
                    <label>CARD NUMBER</label><br/>
                    <input value={CardNumber} onChange={(e)=>{setCardNumber(e.target.value)}} id='CardNumber' className='col-7' type='number' placeholder='eg. 1234 5678 0009 1020' maxLength = "16" required/>
                    <p id='CardNumberWarning'></p>
                </div>
                <div>

                <label>EXP. DATE (MM/YY) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CVC </label><br/>
                <div className='d-flex'>
                    <div className='p-1'>
                        <input value={CardMonth} onChange={(e)=>{setCardMonth(e.target.value)}} id='CardMonth' className='col-2 float-start' type='number' placeholder='MM' maxLength = "2" required/>
                        <p id='CardMonthWarning'></p>
                    </div>
                    <div className='p-1'>
                        <input value={CardYear} onChange={(e)=>{setCardYear(e.target.value)}} id='CardYear' className='col-2 ms-1 float-start' type='number' placeholder='YY' maxLength = "2" required/>
                        <p id='CardYearWarning'></p>
                    </div>
                    <div className='p-1'> 
                        <input value={CardCvc} onChange={(e)=>{setCardCvc(e.target.value)}} id='CardCvc' className='col-2 float-start ms-1' placeholder='eg. 123' type='number' maxLength={1}/><br/>
                        <p id='CardCvcWarning' className='col-8 float-end ms-5'></p>    
                    </div>
                </div>
                
                </div>
                <button className={styles.confirm} type='submit' onClick={WarningClick} >Confirm</button>
            </form>
            
        </div>
    )
}

export default Form