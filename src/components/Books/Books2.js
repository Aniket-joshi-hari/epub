import React from 'react';
import classes from './Books.css'
const Books2 = (props) => {
    return (
        
        <div className={classes.item1} onClick={props.click}><img src={props.src}  height="150" width="180" /></div>

    
    );
};

export default Books2;