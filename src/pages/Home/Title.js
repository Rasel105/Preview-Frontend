import React from 'react';

const Title = (props) => {
    const { setting } = props.data;
    const userData = props.userData;
    
    return (
        <div>
            <h1 className='text-3xl' style={{ fontFamily: setting.customCSS.fontFamily, fontSize: setting.customCSS.fontSize, textAlign: setting.customCSS.textAlign }}>Name: {setting?.customCSS.text ? setting?.customCSS.text : userData?.name}</h1>
        </div>
    );
};

export default Title;