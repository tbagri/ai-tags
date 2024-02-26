import React, { useState } from 'react';
import TagList from './TagList.js';
import './App.css';
import Popup from './PopUp.js';

function Transaction(props) {
    const [isPopOpen, setIsPopOpen] = useState(false);
    const [tags, setTags] = useState(props.transaction.tags || []);

    function formatType(x) {
        return x.replaceAll('_', ' ').toUpperCase();
    }

    function onAddClicked() {
        setIsPopOpen(true);
    }

    function onTagSubmit(tag) {
        setIsPopOpen(false);
        setTags(prevTags => [...prevTags, tag]);
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
                <Popup isOpen={isPopOpen} actionType="Creating" memo="Transfer To State High Hack Club" onClose={() => setIsPopOpen(false)} onTagSubmit={onTagSubmit}></Popup>
            </div>
        </div>
    );
}

export default Transaction;