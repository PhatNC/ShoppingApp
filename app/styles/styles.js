import {
    StyleSheet, Dimensions
} from 'react-native';

import { color } from './color';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    contentText: {
        fontFamily: "Sawarabi Mincho Medium",
        fontSize: 15
    },
    titleText: {
        fontFamily: "Sawarabi Mincho Medium",
        fontSize: 20,
        color: '#263238',
    },
    priceText: {
        fontSize: 20,
        color: color.warning,
        fontWeight: 'bold'
    },
    priceTotal: {
        fontSize: 30,
        color: color.warning,
        fontWeight: 'bold'
    },
    highlightText: {
        fontSize: 15,
        color: color.highlight,
    },
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 2,
        borderColor: '#DFDFDF',
    },
    productImage: {
        width: width / 4.236,
        height: width / 2.618,
        resizeMode: 'cover',
    },
})