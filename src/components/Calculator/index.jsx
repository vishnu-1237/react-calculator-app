import React, {useState} from 'react';
import styles from './index.module.css';
import DisplayOutput from '../DisplayOutput';
import Keypad from '../Keypad';

const Calculator = () => {
    const [output, setOutput] = useState('0');
    const numbers = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
    const operators = ['/', 'x', '-', '+'];
    const buttons = ['C', 'Back', '%'];
    const [selectedOperator, setOperator] = useState('');
    const [displayValue, setValue] = useState('');

    const checkBtnValue = value => {
        let outputFinal = output;
        let displayValueFinal = parseInt(displayValue, 10);

        if (value === 'C') {
            outputFinal= '0';
            setValue('');
            setOperator('');
            setOutput(outputFinal);
        } else if (value === 'Back') {
            outputFinal = outputFinal.substr(0, outputFinal.length - 1);
          if (outputFinal === '') outputFinal = '0';
            setOutput(outputFinal);
        } else if (value === '%') {
            checkOperator(value);
        }

    }

    const showOutput = () => {
       let outputFinal = parseInt(output, 10);
       let displayValueFinal = parseInt(displayValue, 10);
       
       switch (selectedOperator) {
        case '+':
        outputFinal = outputFinal + displayValueFinal;
          break;
        case '-':
        outputFinal = displayValueFinal - outputFinal;
          break;
        case 'x':
        outputFinal = outputFinal * displayValueFinal;
          break;
        case '/':
        outputFinal = displayValueFinal / outputFinal;
            break;
        case '%':
        outputFinal = displayValueFinal / outputFinal;
          break;
        default:
        outputFinal = '0';
      }

        outputFinal = outputFinal.toString();
        if (outputFinal === 'NaN' || outputFinal === 'Infinity') outputFinal = '0';
        setOutput(outputFinal);
        setValue(displayValueFinal);
        setOperator('');
    }

    const checkOperator = value => {
        let outputFinal = output;
        let displayValueFinal = displayValue;
        if (selectedOperator === '') {
            displayValueFinal = outputFinal;
            outputFinal = '0';
        }
        setValue(displayValueFinal);
        setOutput(outputFinal);
        setOperator(value);
    }

    const updateDisplay = value => {
        let outputFinal = output;

        if (value === '.' && outputFinal.includes('.')) value = '';
    
        if (value === 'ce') {
            outputFinal = outputFinal.substr(0, outputFinal.length - 1);
          if (outputFinal === '') outputFinal = '0';
        } else {
            outputFinal === '0' ? (outputFinal = value) : (outputFinal += value);
        }
        setOutput(outputFinal);
      };

    return (
        <div className={styles.container} >
            <DisplayOutput output={output} />
            <Keypad
            numbers={numbers}
            operators={operators}
            checkOperator={checkOperator}
            updateDisplay={updateDisplay}
            showOutput={showOutput}
            buttons={buttons}
            checkBtnValue={checkBtnValue}
            />
        </div>
    );
};

export default Calculator;