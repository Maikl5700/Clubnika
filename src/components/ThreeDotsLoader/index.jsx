import React from 'react';
import './style.scss';

const ThreeDotsLoader = props => {
    // console.log(props)
    return (
        <div {...props} className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
}

export default ThreeDotsLoader;
