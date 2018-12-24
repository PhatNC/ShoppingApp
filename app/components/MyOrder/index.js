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

export default class MyOrder extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon name="arrow-back" size={30} color="white" onPress={() => {}} />
          <Text style={styles.titleStyle}>MY ORDER</Text>
          <View />
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#D3D3D3"
          }}
        >
          {/* Item */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              margin: 10,
              backgroundColor: "white",
              elevation: 5
            }}
          >
            <View style={{ margin: 5 }}>
              <Image
                source={cake10}
                style={{
                  width: width * 0.3,
                  height: width * 0.3,
                  marginBottom: 10
                }}
              />
              <View
                style={{
                  backgroundColor: "#112b39",
                  marginTop: 10,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  TRACK ORDER
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, margin: 5 }}>
              <Icon
                name="cancel"
                size={25}
                color="#000a12"
                iconStyle={{ position: "absolute", right: 0, top: 0 }}
              />
              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ color: "#35A94F", fontWeight: "bold", fontSize: 25 }}
                >
                  #52672
                </Text>
                <Text style={{ fontSize: 15 }}>13 May, 2018</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Price</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $27.42
                  </Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Quantity</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>3</Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Total</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $82.26
                  </Text>
                </View>
              </View>

              <View
                style={{
                  paddingBottom: 5,
                  paddingTop: 15,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Shipping type
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Tracking status
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>Standard</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "darkcyan",
                      fontWeight: "bold"
                    }}
                  >
                    Pendding
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Item */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              margin: 10,
              backgroundColor: "white",
              elevation: 5
            }}
          >
            <View style={{ margin: 5 }}>
              <Image
                source={cake11}
                style={{
                  width: width * 0.3,
                  height: width * 0.3,
                  marginBottom: 10
                }}
              />
              <View
                style={{
                  backgroundColor: "#112b39",
                  marginTop: 10,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  TRACK ORDER
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, margin: 5 }}>
              <Icon
                name="cancel"
                size={25}
                color="#000a12"
                iconStyle={{ position: "absolute", right: 0, top: 0 }}
              />
              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ color: "#35A94F", fontWeight: "bold", fontSize: 25 }}
                >
                  #52672
                </Text>
                <Text style={{ fontSize: 15 }}>13 May, 2018</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Price</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $27.42
                  </Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Quantity</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>3</Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Total</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $82.26
                  </Text>
                </View>
              </View>

              <View
                style={{
                  paddingBottom: 5,
                  paddingTop: 15,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Shipping type
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Tracking status
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>Standard</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#35A94F",
                      fontWeight: "bold"
                    }}
                  >
                    Shipped
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Item */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              margin: 10,
              backgroundColor: "white",
              elevation: 5
            }}
          >
            <View style={{ margin: 5 }}>
              <Image
                source={cake6}
                style={{
                  width: width * 0.3,
                  height: width * 0.3,
                  marginBottom: 10
                }}
              />
              <View
                style={{
                  backgroundColor: "#112b39",
                  marginTop: 10,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  TRACK ORDER
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, margin: 5 }}>
              <Icon
                name="cancel"
                size={25}
                color="#000a12"
                iconStyle={{ position: "absolute", right: 0, top: 0 }}
              />
              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ color: "#35A94F", fontWeight: "bold", fontSize: 25 }}
                >
                  #52672
                </Text>
                <Text style={{ fontSize: 15 }}>13 May, 2018</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Price</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $27.42
                  </Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Quantity</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>3</Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Total</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $82.26
                  </Text>
                </View>
              </View>

              <View
                style={{
                  paddingBottom: 5,
                  paddingTop: 15,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Shipping type
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Tracking status
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>Standard</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#E53935",
                      fontWeight: "bold"
                    }}
                  >
                    Cancel
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* Item */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              margin: 10,
              backgroundColor: "white",
              elevation: 5
            }}
          >
            <View style={{ margin: 5 }}>
              <Image
                source={cake10}
                style={{
                  width: width * 0.3,
                  height: width * 0.3,
                  marginBottom: 10
                }}
              />
              <View
                style={{
                  backgroundColor: "#112b39",
                  marginTop: 10,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  TRACK ORDER
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, margin: 5 }}>
              <Icon
                name="cancel"
                size={25}
                color="#000a12"
                iconStyle={{ position: "absolute", right: 0, top: 0 }}
              />
              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ color: "#35A94F", fontWeight: "bold", fontSize: 25 }}
                >
                  #52672
                </Text>
                <Text style={{ fontSize: 15 }}>13 May, 2018</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Price</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $27.42
                  </Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Quantity</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>3</Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Total</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $82.26
                  </Text>
                </View>
              </View>

              <View
                style={{
                  paddingBottom: 5,
                  paddingTop: 15,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Shipping type
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Tracking status
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>Standard</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "darkcyan",
                      fontWeight: "bold"
                    }}
                  >
                    Pendding
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Item */}
          <View
            style={{
              flexDirection: "row",
              padding: 5,
              margin: 10,
              backgroundColor: "white",
              elevation: 5
            }}
          >
            <View style={{ margin: 5 }}>
              <Image
                source={cake10}
                style={{
                  width: width * 0.3,
                  height: width * 0.3,
                  marginBottom: 10
                }}
              />
              <View
                style={{
                  backgroundColor: "#112b39",
                  marginTop: 10,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white"
                  }}
                >
                  TRACK ORDER
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, margin: 5 }}>
              <Icon
                name="cancel"
                size={25}
                color="#000a12"
                iconStyle={{ position: "absolute", right: 0, top: 0 }}
              />
              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10
                }}
              >
                <Text
                  style={{ color: "#35A94F", fontWeight: "bold", fontSize: 25 }}
                >
                  #52672
                </Text>
                <Text style={{ fontSize: 15 }}>13 May, 2018</Text>
              </View>

              <View
                style={{
                  borderBottomColor: "#282C34",
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  paddingTop: 10,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Price</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $27.42
                  </Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Quantity</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>3</Text>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={{ fontSize: 13 }}>Total</Text>
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    $82.26
                  </Text>
                </View>
              </View>

              <View
                style={{
                  paddingBottom: 5,
                  paddingTop: 15,
                  paddingRight: 40,
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Shipping type
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "#000a12"
                    }}
                  >
                    Tracking status
                  </Text>
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>Standard</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "darkcyan",
                      fontWeight: "bold"
                    }}
                  >
                    Pendding
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        <View containerStyle={{ padding: 10, margin: 10 }}>
          <Button
            buttonStyle={{
              height: 50,
              margin: 10,
              backgroundColor: "#000a12",
              alignItems: "center",
              justifyContent: "center"
            }}
            title="CLEAR UP"
            onPress={() => {}}
          />
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
