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

import { Icon, Button, Badge } from "react-native-elements";
import cake6 from "../../media/temp/cake6.jpg";
import cake7 from "../../media/temp/cake7.jpg";
import cake8 from "../../media/temp/cake8.jpg";
import cake9 from "../../media/temp/cake9.jpg";
import cake10 from "../../media/temp/cake10.jpg";
import cake11 from "../../media/temp/cake11.jpg";

export default class FavorProduct extends Component {
  componentWillMount() {
    this.props.getFavoriteRequest({ id: this.props.authen._id });
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
              fontFamily: "Medinah",
              color: "#B10D65",
              fontSize: 35,
              color: "white"
            }}
          >
            My Favorite
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
                  {/* <Icon
                    name="cancel"
                    size={25}
                    color="#000a12"
                    iconStyle={{ position: "absolute", right: 0, top: 0 }}
                  /> */}
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
              </TouchableOpacity>
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
