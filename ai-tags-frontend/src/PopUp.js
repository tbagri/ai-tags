import React, { useState } from 'react';
import './App.css';

function Popup(props) {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleEnterClick() {
        props.onTagSubmit(inputValue);
        setInputValue('');
    }

    function handleGenerationClick() {
        props.addSuggestedTags();
    }

    if (!props.isOpen) return null;

    if (props.isGenerating) {
        return (
            <div className="popup-overlay">
            <div className="popup-content">
                <h1>Generating AI Tags</h1>
            </div>
        </div>
        )
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={props.onClose}>X</button>
                <h2>{props.actionType} Tag for:</h2>
                <h2>{props.memo}</h2>
                <input type='text' className="tag-input" placeholder="Enter tag" value={inputValue} onChange={handleInputChange}></input>
                <button className="enter-button" onClick={handleEnterClick}>Enter</button>
                <h4>or</h4>
                <button className="enter-button" onClick={handleGenerationClick}>AI Generate Tags</button>
            </div>
        </div>
    );
}

export default Popup;