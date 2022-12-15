import { useRef, useState } from 'react';

enum Operators {
    add, subtract, multiply, divide
}

export const useCalculator = () => {

    const [smallNumber, setSmallNumber] = useState('0');
    const [operateNumber, setOperateNumber] = useState('0');

    const lastOperation = useRef<Operators>()


    const clearOperations = () => {
        setOperateNumber('0');
        setSmallNumber('0');
    }

    const setupNumber = (textNumber: string) => {

        // No aceptar doble punto
        if (operateNumber.includes('.') && textNumber === '.') return;

        if (operateNumber.startsWith('0') || operateNumber.startsWith('-0')) {

            // Punto decimal
            if (textNumber === '.') {
                setOperateNumber(operateNumber + textNumber);

                // Evaluar si es otro cero, y hay un punto
            } else if (textNumber === '0' && operateNumber.includes('.')) {
                setOperateNumber(operateNumber + textNumber);

                // Evaluar si es diferente de cero y no tiene un punto
            } else if (textNumber !== '0' && !operateNumber.includes('.')) {
                setOperateNumber(textNumber);

                // Evitar 0000.0
            } else if (textNumber === '0' && !operateNumber.includes('.')) {
                setOperateNumber(operateNumber);
            } else {
                setOperateNumber(operateNumber + textNumber);
            }

        } else {
            setOperateNumber(operateNumber + textNumber);
        }
    }

    const positiveNegativeSwitcher = () => {
        if (operateNumber.includes('-')) {
            setOperateNumber(operateNumber.replace('-', ''));
        } else {
            setOperateNumber('-' + operateNumber);
        }
    }

    const btnDelete = () => {

        let negative = '';
        let numberTemp = operateNumber;
        if (operateNumber.includes('-')) {
            negative = '-';
            numberTemp = operateNumber.substr(1);
        }

        if (numberTemp.length > 1) {
            setOperateNumber(negative + numberTemp.slice(0, -1));
        } else {
            setOperateNumber('0');
        }
    }

    const changeLastNumber = () => {
        if (operateNumber.endsWith('.')) {
            setSmallNumber(operateNumber.slice(0, -1));
        } else {
            setSmallNumber(operateNumber);
        }
        setOperateNumber('0');
    }


    const btnDivide = () => {
        changeLastNumber();
        lastOperation.current = Operators.divide;
    }

    const btnMultiply = () => {
        changeLastNumber();
        lastOperation.current = Operators.multiply;
    }

    const btnSubtract = () => {
        changeLastNumber();
        lastOperation.current = Operators.subtract;
    }

    const btnAdd = () => {
        changeLastNumber();
        lastOperation.current = Operators.add;
    }

    const calculate = () => {

        const num1 = Number(operateNumber);
        const num2 = Number(smallNumber);

        switch (lastOperation.current) {
            case Operators.add:
                setOperateNumber(`${num1 + num2}`);
                break;

            case Operators.subtract:
                setOperateNumber(`${num2 - num1}`);
                break;

            case Operators.multiply:
                setOperateNumber(`${num1 * num2}`);
                break;

            case Operators.divide:
                setOperateNumber(`${num2 / num1}`);
                break;

        }

        setSmallNumber('0');
    }


    return {
        smallNumber,
        operateNumber,
        clearOperations,
        positiveNegativeSwitcher,
        btnDelete,
        btnDivide,
        setupNumber,
        btnMultiply,
        btnSubtract,
        btnAdd,
        calculate,
    }

}