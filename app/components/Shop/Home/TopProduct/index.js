import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList, ListView } from 'react-native';

// import TopProductItem from './TopProductItem';
import { styles } from '../../../../styles/styles';


const { height, width } = Dimensions.get('window');

export default class TopProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProductRequest();
  }

  render() {
    const {
      container,
      titleContainer,
      body,
      productContainer,
      productImage,
      textContainer
    } = topProductStyles;
    return (

      <View style={container}>
        <View style={titleContainer}>
          <Text style={styles.titleText}>Top Products</Text>
        </View >
        {(this.props.products.length) ?
          <ListView
            contentContainerStyle={body}
            enableEmptySections
            dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(this.props.products)}
            renderRow={product => (
              <TouchableOpacity style={productContainer} onPress={() => this.props.navigation.navigate('PRODUCT_DETAIL', product)}>
                <Image source={{ uri: `${product.image[0]}` }} style={productImage} />
                <View style={textContainer}>
                  <Text style={styles.contentText}>{product.name}</Text>
                  <Text style={styles.priceText}>{product.price},00$</Text>
                </View>

              </TouchableOpacity>
            )}
            renderSeparator={(sectionId, rowId) => {
              if (rowId % 2 === 1) return <View style={{ width, height: 10 }} />;
              return null;
            }}
          />
          : <View style={styles.wrapper}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#90A4AE', fontSize: 20 }}>There is no item.</Text>
            </View>
          </View>
        }

      </View>
    )
  }
}

const produceWidth = (width - 50) / 2;
const productImageHeight = (produceWidth / 361) * 452;

const topProductStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    elevation: 3,
    marginBottom: 20,
  },
  titleContainer: {
    height: 40,
    justifyContent: 'center',
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  productContainer: {
    width: produceWidth,
  },
  productImage: {
    width: produceWidth,
    height: productImageHeight
  },
  textContainer: {
    justifyContent: 'space-between',
    flex: 1,
    paddingTop: 5
  }
});