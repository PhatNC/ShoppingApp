import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

import cake1 from '../../../../media/temp/cake1.jpg';
import cake2 from '../../../../media/temp/cake2.jpg';
import cake3 from '../../../../media/temp/cake3.jpg';
import cake4 from '../../../../media/temp/cake4.jpg';
import cake5 from '../../../../media/temp/cake5.jpg';

import { styles } from '../../../../styles/styles';
import SearchItem from './SearchItem';


export default class SearchView extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          <SearchItem src={cake1} navigation={this.props.navigation} />
          <SearchItem src={cake2} navigation={this.props.navigation} />
          <SearchItem src={cake3} navigation={this.props.navigation} />
          <SearchItem src={cake4} navigation={this.props.navigation} />
          <SearchItem src={cake5} navigation={this.props.navigation} />
        </ScrollView>

      </View>
    );
  }
}
