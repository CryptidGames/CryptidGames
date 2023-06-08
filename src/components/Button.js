import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--outline1'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({dest, id, children, type, onClick, buttonStyle, 
    buttonSize}) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle 
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize 
        : SIZES[0];

        return (
            <Link to={ window.location.pathname + dest } className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                id={id}
                >
                    {children}
                </button>
            </Link>
        )
    };