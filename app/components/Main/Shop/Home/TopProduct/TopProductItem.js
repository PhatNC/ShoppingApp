// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// const { height, width } = Dimensions.get('window');
// import cake1 from '../../../../../media/temp/cake1.jpg';

// export default class TopProductItem extends Component {
//     render() {
//         const { productContainer, productImage,
//             produceName, producePrice,
//         } = styles;
//         return (
//             <TouchableOpacity
//                 style={productContainer}
//                 onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL')}
//                 activeOpacity={1}
//             >
//                 <Image
//                     // source={this.props.info.image}
//                     source={cake1}
//                     style={productImage} />
//                 <Text style={produceName} >{this.props.info.name}</Text>
//                 <Text style={producePrice}>{this.props.info.price}</Text>
//             </TouchableOpacity>
//         )
//     }
// }

// const produceWidth = (width - 60) / 2;
// const productImageHeight = (produceWidth / 361) * 452;

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff',
//         margin: 5,
//         shadowColor: '#2E272B',
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.2,
//         padding: 10,
//         paddingTop: 0,
//         flex: 1,
//         marginBottom: 20
//     },
//     titleContainer: {
//         height: 40,
//         justifyContent: 'center',
//     },
//     title: {
//         color: '#D3D3CF',
//         fontSize: 15
//     },
//     body: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//         paddingBottom: 5
//     },
//     productContainer: {
//         width: produceWidth,
//         shadowColor: '#2E272B',
//         shadowOffset: { width: 0, height: 3 },
//         shadowOpacity: 0.2,
//     },
//     productImage: {
//         width: produceWidth,
//         height: productImageHeight
//     },
//     produceName: {
//         marginVertical: 5,
//         paddingLeft: 10,
//         fontFamily: 'Avenir',
//         color: '#D3D3CF',
//         fontWeight: '500'
//     },
//     producePrice: {
//         marginBottom: 5,
//         paddingLeft: 10,
//         fontFamily: 'Avenir',
//         color: '#662F90'
//     }
// });