import {
    StyleSheet,
} from 'react-native';

import { color } from './color';

export const styles = StyleSheet.create({
    contentText: {
        fontFamily: "Sawarabi Gothic Medium",
        fontSize: 15
    },
    titleText: {
        fontFamily: "Sawarabi Mincho Medium",
        fontSize: 23,
    },
    priceText: {
        fontSize: 20,
        color: color.warning,
        fontWeight: 'bold'
    },
    highlightText: {
        fontFamily: "Sawarabi Gothic Medium",
        fontSize: 15,
        color: 'black',
    }
})