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

import cake6 from "../../media/temp/cake6.jpg";
import cake7 from "../../media/temp/cake7.jpg";
import cake8 from "../../media/temp/cake8.jpg";
import cake9 from "../../media/temp/cake9.jpg";
import cake10 from "../../media/temp/cake10.jpg";
import cake11 from "../../media/temp/cake11.jpg";

import { Icon, Badge, Rating, Button, CheckBox } from "react-native-elements";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
// import { styles } from "../../../styles/styles";
const { width, height } = Dimensions.get("window");

export default class TrackOrder extends Component {
  constructor(props) {
    super(props);
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
  }

  componentWillMount() {}

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="white" onPress={() => {}} />
          <Text style={styles.titleStyle}>TRACK ORDER</Text>
          <Badge
            containerStyle={{
              backgroundColor: "white",
              height: 30,
              margin: 5,
              elevation: 5,
              paddingLeft: 25,
              paddingRight: 25
            }}
          >
            <Text
              style={{ color: "#000a12", fontWeight: "bold", fontSize: 20 }}
            >
              $27.42
            </Text>
          </Badge>
        </View>
        <View
          style={{
            justifyContent: "space-between",
            flex: 1
          }}
        >
          <View
            style={{
              margin: 10,
              marginBottom: 0,
              padding: 10,
              borderBottomColor: "#000a12",
              borderBottomWidth: 4,
              flex: 1,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "Avenir",
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#233f51"
                }}
              >
                Delivery time/ 45 min
              </Text>

              {/* Timeline bar */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 15
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    height: 2,
                    width: "100%",
                    backgroundColor: "#D0CDCD",
                    top: "50%" - 2
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#40C4FF",
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>1</Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#40C4FF",
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>2</Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#D0CDCD",
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>3</Text>
                </View>
              </View>
              {/* End Timeline bar */}

              <Text
                style={{
                  color: "#01579B",
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold"
                }}
              >
                Your Order has been cooked
              </Text>

              <View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="check-circle"
                    size={30}
                    color="#40C4FF"
                    containerStyle={{ margin: 15 }}
                  />
                  <Text
                    style={{
                      color: "#000a12",
                      textAlign: "center",
                      fontSize: 17
                    }}
                  >
                    Order has been placed
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="panorama-fish-eye"
                    size={30}
                    color="#40C4FF"
                    containerStyle={{ marginLeft: 15, marginRight: 15 }}
                  />
                  <Text
                    style={{
                      color: "#000a12",
                      textAlign: "center",
                      fontSize: 17
                    }}
                  >
                    Your Order has been cooked
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Icon
                    name="panorama-fish-eye"
                    size={30}
                    color="#40C4FF"
                    containerStyle={{ margin: 15 }}
                  />
                  <Text
                    style={{
                      color: "#000a12",
                      textAlign: "center",
                      fontSize: 17
                    }}
                  >
                    Your Order has been delivered
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ padding: 5, margin: 5, flex: 1 }}>
            <View style={{ paddingLeft: 20 }}>
              <Text
                style={{ color: "#233f51", fontSize: 25, fontWeight: "bold" }}
              >
                DELIVER AT
              </Text>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                John Hanson
              </Text>
              <Text style={{ fontSize: 18 }}>
                2391 Rosecran Ave, Suite 200 E Segundo, California, United
                States
              </Text>
            </View>
            <ScrollView style={{ flex: 4, margin: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={cake8}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    margin: 5,
                    marginRight: 15
                  }}
                />
                <Text
                  style={{ fontSize: 18, color: "#305266", fontWeight: "bold" }}
                >
                  Cake Name x 1 products
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={cake9}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    margin: 5,
                    marginRight: 15
                  }}
                />
                <Text
                  style={{ fontSize: 18, color: "#305266", fontWeight: "bold" }}
                >
                  Cake Name x 1 products
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={cake10}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    margin: 5,
                    marginRight: 15
                  }}
                />
                <Text
                  style={{ fontSize: 18, color: "#305266", fontWeight: "bold" }}
                >
                  Cake Name x 1 products
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={cake10}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    margin: 5,
                    marginRight: 15
                  }}
                />
                <Text
                  style={{ fontSize: 18, color: "#305266", fontWeight: "bold" }}
                >
                  Cake Name x 1 products
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Image
                  source={cake10}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    margin: 5,
                    marginRight: 15
                  }}
                />
                <Text
                  style={{ fontSize: 18, color: "#305266", fontWeight: "bold" }}
                >
                  Cake Name x 1 products
                </Text>
              </View>
            </ScrollView>
          </View>
          <View containerStyle={{ padding: 10, margin: 10 }}>
            <Button
              buttonStyle={{
                height: 50,
                margin: 10,
                backgroundColor: "#112b39",
                alignItems: "center",
                justifyContent: "center"
              }}
              title="OK"
              onPress={() => {}}
            />
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
    fontSize: 25,
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
