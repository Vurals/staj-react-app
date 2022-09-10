import React from "react";

export const NumberButton = (props) => {
    const { updateCalc, label } = props; //product =img, productlist

    return (
        <button className="number-button" onClick={() => updateCalc(label)} key={label}>
            {label}
        </button>
    );
};

export default NumberButton;