import React from 'react';

const Subtitle = (props) => {
    const { setting } = props.data;
    const userData = props.userData;
    console.log(userData);

    return (
        <div>
            <h1 className='text-2xl' style={{ fontFamily: setting.customCSS.fontFamily, fontSize: setting.customCSS.fontSize, textAlign: setting.customCSS.textAlign }}>Company: {setting?.customCSS.text ? setting?.customCSS.text : userData?.company}</h1>
            <h1 className='text-2xl'>Status: {userData?.status}</h1>
        </div>
    );
};

export default Subtitle;