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
  Image,
  RefreshControl,
  Alert
} from "react-native";

import { Icon, Button, Badge } from "react-native-elements";

export default class FavorProduct extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getFavoriteRequest(this.props.id);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.props.favoriteProducts.length ? (
          <ListView
            enableEmptySections
            dataSource={new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows(this.props.favoriteProducts)}
            renderRow={favorItem => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  padding: 5,
                  margin: 10,
                  backgroundColor: "white",
                  elevation: 5
                }}
                activeOpacity={1}
                onPress={() => {
                  this.props.navigation.navigate(
                    "PRODUCT_DETAIL",
                    favorItem.product
                  );
                }}
              >
                <View style={{ margin: 5 }}>
                  <Image
                    source={{ uri: `${favorItem.product.image[0]}` }}
                    style={{
                      width: width * 0.3,
                      height: width * 0.4,
                      marginBottom: 10
                    }}
                  />
                </View>
                <View style={{ flex: 1, margin: 5 }}>
                  <View
                    style={{
                      paddingBottom: 10
                    }}
                  >
                    <Text
                      style={{
                        color: "#000a12",
                        fontWeight: "bold",
                        fontSize: 20
                      }}
                    >
                      {favorItem.product.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingTop: 10,
                        textAlign: "justify"
                      }}
                      numberOfLines={3}
                    >
                      {favorItem.product.description}
                    </Text>
                  </View>

                  <View
                    style={{
                      paddingBottom: 10,
                      paddingRight: 5,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flex: 1
                      }}
                    >
                      <Badge
                        containerStyle={{
                          backgroundColor: "#FF8F00",
                          height: 30,
                          margin: 5,
                          elevation: 5
                        }}
                      >
                        <Text style={{ color: "black" }}>
                          {favorItem.product.flavor}
                        </Text>
                      </Badge>
                    </View>
                    <View
                      style={{
                        backgroundColor: "#000A12",
                        height: 70,
                        width: 70,
                        borderRadius: 35,
                        opacity: 0.9,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          color: "white"
                        }}
                      >
                        ${favorItem.product.price}.00
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.addUpdateFavoriteRequest({
                      product: favorItem.product,
                      favorFlg: false,
                      accountID: this.props.id,
                      productID: favorItem.product.productID
                    });
                    this.props._onRefresh();
                    Alert.alert(
                      "Successfully!",
                      "Successful transaction.",
                      [
                        { text: "OK", onPress: () => console.log("On Pressed") }
                      ],
                      { cancelable: false }
                    );
                  }}
                >
                  <Icon name="cancel" size={25} color="#000a12" />
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.wrapper}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#90A4AE", fontSize: 20 }}>
                There is no item.
              </Text>
            </View>
          </View>
        )}
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
