import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  ListView,
  Dimensions
} from "react-native";

import Swiper from "react-native-swiper";

import cake6 from "../../../media/temp/cake6.jpg";
import cake7 from "../../../media/temp/cake7.jpg";
import cake8 from "../../../media/temp/cake8.jpg";
import cake9 from "../../../media/temp/cake9.jpg";
import cake10 from "../../../media/temp/cake10.jpg";
import cake11 from "../../../media/temp/cake11.jpg";

import { Icon, Badge } from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import { styles } from "../../../styles/styles";
const { width, height } = Dimensions.get("window");

export default class CakeDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="white" onPress={() => {}} />
          <Text style={styles.titleStyle}>Cake Name</Text>
          <Icon
            name="shopping-cart"
            size={30}
            color="white"
            onPress={() => {}}
            // iconStyle={{}}
          />
        </View>
        <View style={{ width, height: width }}>
          <Swiper autoplay={true} autoplayTimeout={3} showsPagination={false}>
            <Image source={cake6} style={styles.imageStyle} />
            <Image source={cake7} style={styles.imageStyle} />
            <Image source={cake8} style={styles.imageStyle} />
            <Image source={cake9} style={styles.imageStyle} />
            <Image source={cake10} style={styles.imageStyle} />
            <Image source={cake11} style={styles.imageStyle} />
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
            <Text style={styles.txtName}>$47.50</Text>
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
                fontFamily: "Sawarabi Mincho",
                fontSize: 20,
                color: "#263238"
              }}
            >
              Cake Name
            </Text>
            <Text
              style={{
                fontFamily: "Sawarabi Mincho",
                fontSize: 15,
                maxHeight: 80
              }}
            >
              Description
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBDBD8"
  },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000a12"
  },
  wrapper: {
    backgroundColor: "#fff",
    flex: 1
  },
  backStyle: {
    width: 30,
    height: 30
  },
  productContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#FFF",
    borderLeftColor: "#FFF",
    borderRightColor: "#FFF",
    borderWidth: 2
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 30,
    color: "white"
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361
  },
  productInfo: {
    justifyContent: "space-between",
    marginLeft: 15,
    flex: 1
  },
  lastRowInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  txtName: {
    fontFamily: "Avenir",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  txtPrice: {
    fontFamily: "Avenir",
    color: "#B10D65"
  },
  txtMaterial: {
    fontFamily: "Avenir"
  },
  txtColor: {
    fontFamily: "Avenir"
  },
  txtShowDetail: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 15
  },
  body: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: "wrap"
    // paddingBottom: 5
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
});
