import React from 'react';
import styles from './index.module.css';

const Key = ({ keyAction, keyType, keyValue }) => {
    const keyStyle = ['btn-key', 'operator-key'].includes(keyType);
    return (
      <div
        className={styles.keyBox}
        onClick={() => keyAction(keyValue)}
      >
        <p style={{color: keyStyle && 'rosybrown' }}>{keyValue}</p>
      </div>
    );
  };

const Keypad = ({ operators, buttons, showOutput, checkBtnValue, numbers, checkOperator, updateDisplay }) => {
        const buttonKeys= buttons.map((btn, index) => {
            return <Key
            key={`${btn}${index}`}
            keyType={'btn-key'}
            keyValue={btn}
            keyAction={checkBtnValue}
          />
        });
        const numberKeys = numbers.map((number, index) => (
          <Key
            key={`${number}${index}`}
            keyType={'number-key'}
            keyValue={number}
            keyAction={updateDisplay}
          />
        ));
      
        const operatorKeys = operators.map((operator, index) => (
          <Key
            key={`${operator}${index}`}
            keyType={'operator-key'}
            keyValue={operator}
            keyAction={checkOperator}
          />
        ));
      
    return (
        <div className={styles.keyContainer}>
        <div className={styles.numbersContainer}>{buttonKeys}</div>
        <div className={styles.numbersContainer}>{numberKeys}</div>
        <div className={styles.operatorsContainer}>{operatorKeys}</div>
        <div className={styles.submitContainer}>
            <Key keyType="submit-key" keyValue="=" keyAction={showOutput} />
        </div>
        </div>
    )
}

export default Keypad;