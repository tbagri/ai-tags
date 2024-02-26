import React, { useState, useEffect } from 'react';
import TagList from './TagList.js';
import './App.css';
import Popup from './PopUp.js';

function Transaction(props) {
    const [isPopOpen, setIsPopOpen] = useState(false);
    const [tags, setTags] = useState(props.transaction.tags || []);
    const [generating, setGenerating] = useState(false);

    function formatType(x) {
        return x.replaceAll('_', ' ').toUpperCase();
    }

    function onAddClicked() {
        setIsPopOpen(true);
    }

    function onTagSubmit(tag) {
        setIsPopOpen(false);
        if (!tags.includes(tag)) {
            setTags(prevTags => [...prevTags, tag]);
        }
    }

    function replaceSpecialCharacters(inputString) {
        var regex = /[^\w\d]/g;
        var resultString = String(inputString).replace(regex, '_');
    
        return resultString;
    }

    function addSuggestedTags() {
        setGenerating(true);

        let { amount_cents, memo, date, pending, type } = props.transaction;

        amount_cents = replaceSpecialCharacters(amount_cents)
        memo = replaceSpecialCharacters(memo)
        date = replaceSpecialCharacters(date)
        pending = replaceSpecialCharacters(pending)
        type = replaceSpecialCharacters(type)

        if (amount_cents[0] == '-') {
            amount_cents = "Outgoing" + amount_cents;
        } else {
            amount_cents = "Incoming" + amount_cents;
        }

        const formattedString = `http://127.0.0.1:5000/${amount_cents}/${memo}/${date}/${pending}/${type}`;

        fetch(formattedString)
        .then(response => response.json())
        .then(json => (
            json.words.map((word) => 
                onTagSubmit(word)
            )
        ))
        .catch(error => console.error(error))

        setGenerating(false);
    }

    if (props.transaction.tags == null) {
        return <h1>loading</h1>
    }

    return (
        <div className='transaction-box'>
            <h4 className='memo'>{props.transaction.memo}</h4>
            <div className='details'>
                <p className='type'>Type: {formatType(props.transaction.type)}</p>
                <p className='date'>Date: {props.transaction.date}</p>
                <p className='status'>Status: <span className={props.transaction.pending ? 'pending' : 'not-pending'} >{props.transaction.pending ? 'Pending' : 'Not Pending'}</span></p>
                <TagList tags={tags} memo={props.transaction.memo} onAddClicked={onAddClicked}></TagList>
                <Popup isOpen={isPopOpen} actionType="Creating" memo={props.transaction.memo} onClose={() => setIsPopOpen(false)} onTagSubmit={onTagSubmit} addSuggestedTags={addSuggestedTags} isGenerating={generating}></Popup>
            </div>
        </div>
    );
}

export default Transaction;
