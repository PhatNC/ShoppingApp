import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";



const { height, width } = Dimensions.get("window");

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  componentWillMount() {
    this.props.getCategoryRequest();
  }
  render() {
    const { wrapper, textStyle, imageStyle, titleStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={textStyle}>LIST OF CATEGORY</Text>
        </View>
        <View style={{ flex: 5, justifyContent: "flex-end" }}>
          {this.props.Category &&<Swiper
            //showsButtons={true}
            autoplay={true}
			autoplayTimeout={5}
          >
		   { this.props.category.map(e => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("LIST_PRODUCT")} key={e.id}>
                        <Image source={{ uri:this.props.category.uri }} style={imageStyle} />
						<Text style={titleStyle}>{e.name}</Text>
					</TouchableOpacity>
                )) }
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LIST_PRODUCT")}
              activeOpacity={1}
            >
              <Image source={cake1} style={imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LIST_PRODUCT")}
              activeOpacity={1}
            >
              <Image source={cake2} style={imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LIST_PRODUCT")}
              activeOpacity={1}
            >
              <Image source={cake3} style={imageStyle} />
            </TouchableOpacity> */}
          </Swiper>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.38,
    backgroundColor: "#FFF",
    margin: 5,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0
  },
  textStyle: {
    fontSize: 15,
    color: "#AFAEAF"
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 15
  }
});
