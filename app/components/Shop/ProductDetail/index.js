import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
} from "react-native";
import { Icon, Button, Badge } from "react-native-elements";
import { styles } from "../../../styles/styles";
import Swiper from "react-native-swiper";

import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const { width, height } = Dimensions.get("window");

import { addProductToCart } from "../../../containers/CartScreen/action";

class ProductDetail extends Component {
  addToCart = product => {
    if (!this.props.authen._id) {
      Alert.alert(
        "Notification!",
        "Please login to use this feature!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    } else {
      this.props.addProductToCart(product);
      Alert.alert(
        "Successfully!",
        "This product has been added to cart.",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  render() {
    const {
      navigation: {
        state: { params: product }
      }
    } = this.props;
    return (
      <View style={productDetailStyles.wrapper}>
        <View style={productDetailStyles.header}>
          <Icon
            name="arrow-back"
            size={30}
            color="white"
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
          <Text style={styles.titleStyle}>DETAIL</Text>
          <Icon
            name="shopping-cart"
            size={30}
            color="white"
            onPress={() => this.addToCart(product)}
            // iconStyle={{}}
          />
        </View>
        <ScrollView>
          <View style={{ width, height: width }}>
            <Swiper autoplay={true} autoplayTimeout={3} showsPagination={false}>
              {product.image.map(item => (
                <Image source={{ uri: `${item}` }} style={styles.imageStyle} />
              ))}
            </Swiper>
            <View
              style={{
                backgroundColor: "#000a12",
                height: 100,
                width: 100,
                borderRadius: 50,
                opacity: 0.9,
                position: "absolute",
                right: 25,
                top: width - 50,
                zIndex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.txtName}>${product.price}</Text>
            </View>
          </View>
          <View style={{ padding: 10, flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
              <Badge
                containerStyle={{
                  backgroundColor: "#FF8F00",
                  height: 40,
                  margin: 5,
                  elevation: 5
                }}
              >
                <Text style={{ color: "black" }}>Pastries</Text>
              </Badge>
              <Badge
                containerStyle={{
                  backgroundColor: "#00ACC1",
                  height: 40,
                  margin: 5,
                  elevation: 5
                }}
              >
                <Text style={{ color: "black" }}>Party Cakes</Text>
              </Badge>
            </View>
            <View style={{ padding: 5, flex: 1 }}>
              <Text
                style={{
                  fontFamily: "Sawarabi Mincho Medium",
                  fontSize: 20,
                  color: "#263238"
                }}
              >
                {product.name}
              </Text>
              <Text
                style={{
                  fontFamily: "Sawarabi Mincho Medium",
                  fontSize: 15,
                }}
              >
                {product.description}
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <View
                style={{
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  borderColor: "#263238",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5
                }}
              >
                <FontAwesomeIcon
                  name="facebook"
                  color="#263238"
                  size={25}
                  iconStyle={{ borderWidth: 2, borderColor: "black" }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  borderColor: "#263238",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5
                }}
              >
                <FontAwesomeIcon
                  name="twitter"
                  color="#263238"
                  size={25}
                  iconStyle={{ borderWidth: 2, borderColor: "black" }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  borderColor: "#263238",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5
                }}
              >
                <FontAwesomeIcon
                  name="google"
                  color="#263238"
                  size={25}
                  iconStyle={{ borderWidth: 2, borderColor: "black" }}
                />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                  borderColor: "#263238",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 5
                }}
              >
                <FontAwesomeIcon
                  name="instagram"
                  color="#263238"
                  size={25}
                  iconStyle={{ borderWidth: 2, borderColor: "black" }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
  addProductToCart: product => dispatch(addProductToCart(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);

const swiperWidth = width / 1.8;
const swiperHeight = swiperWidth;

const productDetailStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFF",
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    margin: 10,
    elevation: 3
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000a12"
  },
  footer: {
    flex: 6
  },
  imageContainer: {
    flex: 5,
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: "#F0F0F0"
  },
  textBlack: {
    fontFamily: "Avenir",
    fontSize: 20,
    fontWeight: "bold",
    color: "#3F3F46"
  },
  textSmoke: {
    fontFamily: "Avenir",
    fontSize: 20,
    color: "#9A9A9A"
  },
  textHighlight: {
    fontFamily: "Avenir",
    fontSize: 20,
    color: "#7D59C8"
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#F6F6F6",
    paddingLeft: 10
  },
  descContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  descStyle: {
    color: "#AFAFAF",
    textAlign: "justify",
    fontSize: 15
  },
  linkStyle: {
    color: "#7D59C8"
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginRight: 5
  },
  mainRight: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20
  },
  txtColor: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  },
  txtMaterial: {
    color: "#C21C70",
    fontSize: 15,
    fontWeight: "400",
    fontFamily: "Avenir"
  }
});
