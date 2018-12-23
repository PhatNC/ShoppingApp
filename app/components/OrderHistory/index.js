import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  ListView,
  ImageBackground,
  Image
} from "react-native";

import { Icon, Button } from "react-native-elements";
import cake6 from "../../media/temp/cake6.jpg";
import cake7 from "../../media/temp/cake7.jpg";
import cake8 from "../../media/temp/cake8.jpg";
import cake9 from "../../media/temp/cake9.jpg";
import cake10 from "../../media/temp/cake10.jpg";
import cake11 from "../../media/temp/cake11.jpg";

export default class OrderHistory extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.getOrderRequest(this.props.authen._id);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={30}
            color="white"
            onPress={() => {
              this.props.parentNavigation.goBack();
            }}
          />
          <Text
            style={{
              fontFamily: "Avenir",
              color: "#B10D65",
              fontSize: 25,
              color: "white"
            }}
          >
            MY ORDER
          </Text>
          <View />
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#D3D3D3"
          }}
        >
          {/* Item */}
          <ListView
            // contentContainerStyle={styles.body}
            enableEmptySections
            dataSource={new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(this.props.orders)}
            renderRow={order => (
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
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#112b39",
                      marginTop: 10,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("TRACK_ORDER");
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
                  </TouchableOpacity>
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
                      style={{
                        color: "#35A94F",
                        fontWeight: "bold",
                        fontSize: 25
                      }}
                    >
                      #{order.orderID}
                    </Text>
                    <Text style={{ fontSize: 15 }}>{order.createDate}</Text>
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
                      <Text style={{ fontSize: 13 }}>No. Kinds</Text>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        {order.quantity}
                      </Text>
                    </View>
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text style={{ fontSize: 13 }}>Total</Text>
                      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                        ${order.totalPrice}
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
                        {order.status}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </ScrollView>

        {/* <View containerStyle={{ padding: 10, margin: 10 }}>
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
        </View> */}
      </View>
    );
  }
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#000a12"
  }, // eslint-disable-line
  headerTitle: { fontFamily: "Avenir", color: "#fff", fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: "#F6F6F6" },
  orderRow: {
    height: width / 3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around"
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text1: {
    color: "#9A9A9A",
    fontWeight: "bold"
  }
});
