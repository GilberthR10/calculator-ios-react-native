import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Button } from '../components/Button';

import { useCalculator } from '../hooks/useCalculator';


export const CalculatorScreen = () => {

    const {
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
    } = useCalculator();


    return (
        <View style={styles.calContainer}>
            {
                (smallNumber !== '0') && (
                    <Text style={styles.smallResult}>{smallNumber}</Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                {operateNumber}
            </Text>


            {/* Fila de botones */}
            <View style={styles.row}>
                <Button text="C" color="#9B9B9B" action={clearOperations} />
                <Button text="+/-" color="#9B9B9B" action={positiveNegativeSwitcher} />
                <Button text="del" color="#9B9B9B" action={btnDelete} />
                <Button text="/" color="#FF9427" action={btnDivide} />
            </View>

            {/* Fila de botones */}
            <View style={styles.row}>
                <Button text="7" action={setupNumber} />
                <Button text="8" action={setupNumber} />
                <Button text="9" action={setupNumber} />
                <Button text="X" color="#FF9427" action={btnMultiply} />
            </View>

            {/* Fila de botones */}
            <View style={styles.row}>
                <Button text="4" action={setupNumber} />
                <Button text="5" action={setupNumber} />
                <Button text="6" action={setupNumber} />
                <Button text="-" color="#FF9427" action={btnSubtract} />
            </View>

            {/* Fila de botones */}
            <View style={styles.row}>
                <Button text="1" action={setupNumber} />
                <Button text="2" action={setupNumber} />
                <Button text="3" action={setupNumber} />
                <Button text="+" color="#FF9427" action={btnAdd} />
            </View>

            {/* Fila de botones */}
            <View style={styles.row}>
                <Button text="0" action={setupNumber} width />
                <Button text="." action={setupNumber} />
                <Button text="=" color="#FF9427" action={calculate} />
            </View>

        </View>
    )
}