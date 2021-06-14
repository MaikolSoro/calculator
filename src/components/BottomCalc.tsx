import React from 'react'

import { Text, View ,TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color?: string;
    widthB?: boolean;
    action: (numberText: string) => void;
}

export const BottomCalc = ({ text, color = '#2D2D2D', widthB = false, action }: Props) => {
    return ( 
        <TouchableOpacity
            onPress={() => action(text) }
        >
            <View style={{  
                ...styles.boton,
                backgroundColor: color,
                width: (widthB) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonText,
                    color: (color == '#9B9B9B') ? 'black' : 'white'}}
                >{text}</Text>
            </View>
    </TouchableOpacity>
     );
}
 