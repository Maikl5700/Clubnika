import React from 'react';
import './style.scss';
import { inject, observer } from 'mobx-react';

const Loader = ({ show, full }) => {

    const fullStyle = full ? {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh'
    } : null

    // console.log('LOADER')
    if(show) return (
        <div style={fullStyle} className="lds-ring-wrap">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );

    return null
}

export default inject(stores => ({ show: stores.loader.show, full: stores.loader.full }))(Loader);
