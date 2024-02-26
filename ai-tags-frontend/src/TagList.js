import React from 'react';
import './App.css';
function TagList(props) {
    if (props.tags == null) {
        return (<h3>Loading ...</h3>)
    }
    return (
        <div className='tags'>
            {props.tags.map((tag, index) => (
                <span key={index} className='tag'>{tag}</span>
            ))}
            <span key="add-button" className='tag tag-add' onClick={() => props.onAddClicked()}>+</span>
        </div>
    )
}

export default TagList;