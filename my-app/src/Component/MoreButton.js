import React from 'react';

function MoreButton(props){
    return (
            <button onClick={props.onClick}>{props.content}</button>
    );
}

export default MoreButton;