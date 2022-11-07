import React from 'react';

const Button = (props) => {
    const { setting } = props.data;
    const userData = props.userData;
  
    return (
        <div>
            <button style={{ backgroundColor: setting.customCSS.color}} className="btn w-full">Created</button>
        </div>
    );
};

export default Button;