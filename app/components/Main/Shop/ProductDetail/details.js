import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground
} from "react-native";

import { Icon, Button } from "react-native-elements";
import Swiper from "react-native-swiper"

import cake1 from "../../../../media/temp/cake1.jpg";
import cake2 from "../../../../media/temp/cake2.jpg";
import cake3 from "../../../../media/temp/cake3.jpg";
import cake4 from "../../../../media/temp/cake4.jpg";
import cake5 from "../../../../media/temp/cake5.jpg";

export default class ProductDetail extends Component {
	onIndexChanged(){

	}
  render() {
    return (
      <View>
        <ImageBackground style={styles.wrapper}>
          <View style={styles.cardStyle}>
            <View style={styles.header}>
              <Icon
                name="arrow-back"
                size={25}
                color="black"
                onPress={() => this.props.navigation.goBack()}
              />
              <Button
                buttonStyle={{
                  backgroundColor: "#00C853",
                  height: 30,
                  borderRadius: 5
                }}
                iconRight={{
                  name: "shopping-cart",
                  size: 20,
                  color: "white"
                }}
                title="ADD TO CART"
                onPress={() => alert("ADD TO CART")}
              />
              <View />
            </View>
			{/* <Swiper></Swiper> */}
            {/* <View style={styles.imageContainer}> */}
            {/* <ScrollView style={{ flexDirection: 'row', height: swiperHeight }} horizontal >
                            <Image source={cake1} style={styles.productImageStyle} />
                            <Image source={cake2} style={styles.productImageStyle} />
                            <Image source={cake3} style={styles.productImageStyle} />
                            <Image source={cake4} style={styles.productImageStyle} />
						</ScrollView> */}
            <Swiper
              style={styles.wrapper}
              horizontal={false}
			  autoplay
			  onIndexChanged = {()=>this.onIndexChanged()}
            >
              <View>
                <Image source={cake1} resizeMode='stretch' style={styles.image} />
              </View>
              <View>
                <Image source={cake2} resizeMode='stretch' style={styles.image} />
              </View>
              <View>
                <Image source={cake3} resizeMode='stretch' style={styles.image} />
              </View>
              <View>
                <Image source={cake4} resizeMode='stretch' style={styles.image} />
              </View>
            </Swiper>
            {/* </View> */}
            <View style={styles.footer}>
              <View style={styles.titleContainer}>
                <Text style={styles.textMain}>
                  <Text style={styles.textBlack}>Choco Cake</Text>
                  <Text style={styles.textHighlight}> / </Text>
                  <Text style={styles.textSmoke}>50$</Text>
                </Text>
              </View>
              <View style={styles.descContainer}>
                <Text style={styles.descStyle}>
                  Description Description Description Description Description
                  Description Description Description Description Description
                  Description Description Description Description Description
                  Description Description Description Description Description
                  Description Description Description Description Description
                  Description Description Description Description
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 15
                  }}
                >
                  <Text style={styles.txtMaterial} />
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.txtColor}>Color </Text>
                    <View
                      style={{
                        height: 15,
                        width: 15,
                        backgroundColor: "black" /*color.toLowerCase()*/,
                        borderRadius: 15,
                        marginLeft: 10,
                        borderWidth: 1,
                        borderColor: "black"
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const { width } = Dimensions.get("window");
const swiperWidth = width / 1.8 - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D6D6D6"
  },
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10
  },
  header: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10
  },
  cartStyle: {
    width: 25,
    height: 25
  },
  backStyle: {
    width: 25,
    height: 25
  },
  productStyle: {
    width: width / 2,
    height: width / 2
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
  textMain: {
    paddingLeft: 20,
    marginVertical: 10
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
    marginHorizontal: 20,
    paddingBottom: 5
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  descStyle: {
    color: "#AFAFAF"
  },
  linkStyle: {
    color: "#7D59C8"
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5
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
  },
  image: {
    width,
    flex: 1
  }
});
