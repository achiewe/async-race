import React from 'react';
import PropsButton from '../../types/propsButton';

import './button.css';

function Button({ className, text, disabled, handleClick }: PropsButton) {
    return (
        <button
            className={`${className} ${disabled ? 'btn-disabled' : ''}`}
            type="button"
            disabled={disabled}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default Button;
