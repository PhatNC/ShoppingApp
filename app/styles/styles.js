import { StyleSheet, Dimensions } from "react-native";

import { color } from "./color";

const { width, height } = Dimensions.get("window");
const produceWidth = (width - 60) / 2;

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#D6D6D6"
  },
  contentText: {
    fontFamily: "Sawarabi Mincho Medium",
    fontSize: 15
  },
  contentSmallText: {
    fontFamily: "Sawarabi Mincho Medium",
    fontSize: 12
  },
  titleText: {
    fontFamily: "Sawarabi Mincho Medium",
    fontSize: 20,
    color: "#263238"
  },
  priceText: {
    fontSize: 15,
    color: color.warning,
    fontWeight: "bold"
  },
  priceTotal: {
    fontSize: 20,
    color: color.warning,
    fontWeight: "bold"
  },
  highlightText: {
    fontSize: 13,
    fontFamily: "Sawarabi Mincho Medium",
    color: color.highlight
  },
  productContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 2,
    borderColor: "#DFDFDF",
    backgroundColor: "#FFF"
  },
  productImage: {
    width: width / 4.236,
    height: width / 2.618,
    resizeMode: "cover"
  },
  tabContainer: {
    backgroundColor: "#DBDBDB",
    padding: 10,
    flex: 1
  },
  productSmall: {
    width: produceWidth,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    elevation: 3
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  txtName: {
    fontFamily: "Avenir",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  },
  titleStyle: {
    fontFamily: "Avenir",
    color: "#B10D65",
    fontSize: 30,
    color: "white"
  }
});
