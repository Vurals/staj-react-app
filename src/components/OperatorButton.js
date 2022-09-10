import React from "react";

export const OperatorButton = (props) => {
    const { updateCalc, label, color, backgroundColor } = props;

    return (
        <button className="operator-button" onClick={() => updateCalc(label)} key={label} >
            {label}
        </button>
    );
};

export default OperatorButton;