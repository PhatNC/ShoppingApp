import {
    StyleSheet, Dimensions
} from 'react-native';
import { color } from '../../../styles/color';

const { width, height } = Dimensions.get('window');

export const cartStyles = StyleSheet.create({
    firstRow: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 80,
    },
    titleView: {
        maxWidth: 200,
        // backgroundColor:'red'
    },
    mainRight: {
        marginLeft: 10,
        justifyContent: 'space-between',
        flex: 1
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkoutContainer: {
        backgroundColor: 'white', height: height * 0.15,
        borderTopWidth: 1,
        borderTopColor: '#DFDFDF',
        padding: 5,
        justifyContent: 'space-between',
    },
    checkoutTextContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },
    checkoutButton: {
        height: height * 0.05,
        backgroundColor: color.warning,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkoutDiabledButton: {
        height: height * 0.05,
        backgroundColor: '#E57373',
        alignItems: 'center',
        justifyContent: 'center',
    },
    quantityButton: {
        backgroundColor: '#CFD8DC',
        width: 40,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        backgroundColor: '#ECEFF1',
        width: 40,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
