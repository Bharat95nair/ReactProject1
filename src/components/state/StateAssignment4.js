import React, { useState } from 'react'

export default function StateAssignment4() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('+');

    const calculateResult = () => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) return 'Invalid input';

        switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Cannot divide by 0';
        default:
            return '';
        }
    };
  
    return (
    <>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="+">Addition (+)</option>
            <option value="-">Subtraction (-)</option>
            <option value="*">Multiplication (*)</option>
            <option value="/">Division (/)</option>

        </select>
        <div>
            <strong>Result:</strong> {calculateResult()}
        </div>

    </>
  )
}
