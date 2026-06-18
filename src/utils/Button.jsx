import React from 'react';

const Button = ({ content, styles , click }) => {
    return (
            <button onClick={click} className={styles}>{content}</button>
    );
};

export default Button;