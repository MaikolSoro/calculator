import React from 'react'

import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BottomCalc } from '../components/BottomCalc';
import { useCalculator }  from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const {
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
    } = useCalculator()
    
    return (
        <View style={styles.calculatorContainer}>
            {
                (numberPrevious !== '0') && (
                    <Text style={styles.resultSmall}>{ numberPrevious }</Text>
                )
            }
         
                <Text 
                    style={styles.result}
                    numberOfLines={1}
                    adjustsFontSizeToFit
                >
                    { number }
                </Text>
            
            <View style={styles.row}>
                {/* Boton */}
                <BottomCalc text="C"   color="#9B9B9B" action={clean}/>
                <BottomCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
                <BottomCalc text="del" color="#9B9B9B" action={btnDel} />
                <BottomCalc text="/"   color="#FF9427" action={btnDivide} />
            </View>

            <View style={styles.row}>
                {/* Boton */}
                <BottomCalc text="7" action={buildNumber} />
                <BottomCalc text="8" action={buildNumber} />
                <BottomCalc text="9" action={buildNumber} />
                <BottomCalc text="X"  color="#FF9427" action={btnMultiply} />
            </View>

            <View style={styles.row}>
                {/* Boton */}
                <BottomCalc text="4" action={buildNumber} />
                <BottomCalc text="5" action={buildNumber} />
                <BottomCalc text="6" action={buildNumber} />
                <BottomCalc text="-"  color="#FF9427" action={btnRest} />
            </View>

            <View style={styles.row}>
                {/* Boton */}
                <BottomCalc text="1" action={buildNumber} />
                <BottomCalc text="2" action={buildNumber} />
                <BottomCalc text="3" action={buildNumber} />
                <BottomCalc text="+"  color="#FF9427" action={btnSum} />
            </View>
            <View style={styles.row}>
                {/* Boton */}
                <BottomCalc text="0" action={buildNumber}  widthB />
                <BottomCalc text="." action={buildNumber} />
                <BottomCalc text="=" action={calculate} />
            </View>
        </View>

    )
}
