import React from 'react';

const Paragraph = (props) => {
    const { setting } = props.data;
    const userData = props.userData;

    return (
        <div>
            <h1 className='text-2xl mb-3' style={{ fontFamily: setting.customCSS.fontFamily, fontSize: setting.customCSS.fontSize, textAlign: setting.customCSS.textAlign }}>Email: {setting?.customCSS.text ? setting?.customCSS.text : userData?.email}</h1>
        </div>
    );
};

export default Paragraph;