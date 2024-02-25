import React, { useEffect, useState } from 'react';
import Transaction from './Transaction';

function TransactionList() {
    const [transactionData, setTransactionData] = useState([{}]);

    useEffect(() => {
        fetch('https://hcb.hackclub.com/api/v3/organizations/org_Yvguja/transactions')
        .then(response => response.json())
        .then(json => setTransactionData(json))
        .catch(error => console.error(error))
    }, [])

    if (Object.keys(transactionData[0]).length === 0) {
        return (<h1>Loading ...</h1>)
    } else {
        return (
            transactionData.map((x) => {
                return <Transaction transaction={x}></Transaction>
            })
        )
    }
}

export default TransactionList;