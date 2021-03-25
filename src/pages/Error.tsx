import React, { CSSProperties } from 'react';
import ErrorSVG from './error_assets.svg';

const Error: React.FunctionComponent = () => {
    const textStyle: CSSProperties = {
        marginTop: '2em', textAlign: 'center', color: '#a9b0ab', fontWeight: 'bold'
    }

    return (
        <div style={{ height: '86vh' }}>
            <img src={ErrorSVG} alt="" width="100%" style={{ marginTop: '2em' }} />

            <p style={textStyle}> 404 <br /> News cannot be fetched </p>
        </div >
    );
};


export default Error;