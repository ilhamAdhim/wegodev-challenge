import Text from 'antd/lib/typography/Text';
import React, { CSSProperties } from 'react';
import ErrorImage from './error_assets.png';

const Error: React.FunctionComponent = () => {
    const textStyle: CSSProperties = {
        marginTop: '2em', textAlign: 'center', color: '#a9b0ab', fontWeight: 'bold'
    }

    return (
        <div style={{ height: '86vh' }}>
            <img src={ErrorImage} alt="" width="100%" />

            <p style={textStyle}> 404 <br /> News cannot be fetched </p>
        </div >
    );
};


export default Error;