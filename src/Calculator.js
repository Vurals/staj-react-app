import React, { useState } from "react";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";

const Calculator = () => {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const ops = ['/', '*', '+', '-'];

    /* updateCalc
     * Function that calculates the result when a button is clicked
     * */
    const updateCalc = value => {
        if (ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    /*
     * Function that calculates the result and display (render)
     * */
    const calculate = () => {
        if (calc === '') {
            return;
        }
        setCalc(eval(calc).toString());
        setResult('0');
    }
    /*
     * Function that deletes the last element from the display
     * */
    const deleteLast = () => {
        if (calc === '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
    }


    /* 
     * Function that creates digit buttons from NumberButton component
     * */
    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <NumberButton updateCalc={updateCalc} label={i} key={i} />
            )
        }
        return digits;
    }


    return (
        <div className="App">
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ''}
                    {calc || "0"}
                </div>
                <div className="operators">
                    <OperatorButton updateCalc={updateCalc} label={'*'} />
                    <OperatorButton updateCalc={updateCalc} label={'/'} />
                    <OperatorButton updateCalc={updateCalc} label={'+'} />
                    <OperatorButton updateCalc={updateCalc} label={'-'} />
                    <OperatorButton updateCalc={deleteLast} label={'DEL'} />           
                </div>

                <div className="digits">
                    {createDigits()}
                    <NumberButton updateCalc={updateCalc} label={'0'}/>
                    <NumberButton updateCalc={calculate} label={'='} />                
                </div>
            </div>
        </div>
    );
}

export default Calculator;
