import React from 'react';
import './App.css'; 

function Transaction(props) {
    return (
        <div className='transaction-box'>
            <h4 className='memo'>{props.transaction.memo}</h4>
            <div className='details'>
                <p className='type'>Type: {props.transaction.type}</p>
                <p className='date'>Date: {props.transaction.date}</p>
                <p className='status'>{props.transaction.pending ? 'Pending' : 'Not Pending'}</p>
            </div>
        </div>
    );
}

export default Transaction;