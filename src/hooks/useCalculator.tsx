import { useRef, useState } from 'react';

enum Operators {
    sum, substract,multiply, divide
}
export const useCalculator = () => {

        const [numberPrevious, setNumberPrevious] = useState('0');
        const [number, setNumber] = useState('0');
    
        const operation = useRef<Operators>()
    
        const clean = () => {
            setNumber('0');
            setNumberPrevious('0');
        }
        const btnDel = () => {
            let negative = '';
            let numberTemp = number;
    
            if(number.includes('-')){
                negative = '-';
                numberTemp = number.substr(1);
            }
    
            if(numberTemp.length > 1) {
                setNumber(numberTemp.slice(0, -1));
            } else {
                setNumber('0');
            }
        }
    
        const changeNumber = () => {
            if(number.endsWith('.')) {
                setNumberPrevious(number.slice(0, -1));
            } else {
                setNumberPrevious(number);
            }
            setNumber('0');
        }
    
        const buildNumber = (numberText: string) => {
            if(number.includes('.') && numberText === '.') return;
    
            if(number.startsWith('0') || number.startsWith('-0')) {
                if(numberText === '.') {
                    setNumber(number + numberText);
    
                } else if(numberText === '0' && number.includes('.')) {
                    setNumber(number + numberText);
                } else if(numberText !== '0' && !number.includes('.')){
                    setNumber(numberText)
                } else if(numberText === '0' && !number.includes('.')){
                    setNumber(number)
                } else {
                    setNumber(number + numberText);
                }
            } else {
                setNumber(number + numberText);
            }
        }
    
        const positiveNegative = () => {
            if(number.includes('-')){
                setNumber(number.replace('-', ''))
            } else {
                setNumber('-' + number);
            }
        }
    
        const btnDivide = () =>{
            changeNumber();
            operation.current = Operators.divide;
        }
    
        const btnMultiply = () => {
            changeNumber();
            operation.current = Operators.multiply;
        }
    
        const btnRest = () => {
            changeNumber();
            operation.current = Operators.substract;
        }
    
        const btnSum = () => {
            changeNumber();
            operation.current = Operators.sum;
        }
    
        const calculate = () => {
            const num1 = Number( number );
            const num2 = Number( numberPrevious );
    
            switch ( operation.current ) {
                case Operators.sum:
                    setNumber( `${ num1 + num2 }` );
                    break;
    
                case Operators.substract:
                    setNumber( `${ num2 - num1 }` );
                    break;
    
                case Operators.multiply:
                    setNumber( `${ num1 * num2 }` );
                    break;
    
                case Operators.divide:
                    setNumber( `${ num2 / num1 }` );
                    break;
    
            }
            setNumberPrevious( '0' );
        }
        return {
            numberPrevious,
            number,
            clean,
            positiveNegative,
            btnDel,
            btnDivide,
            btnMultiply,
            btnRest,
            btnSum,
            buildNumber,
            calculate
        }
}
