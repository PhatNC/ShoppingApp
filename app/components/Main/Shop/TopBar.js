import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { Icon, SearchBar } from 'react-native-elements'

const { height, width } = Dimensions.get('window');


export default class TopBar extends Component {
    render() {
        const { wrapper, rowContain1, textInputStyle, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={rowContain1}>
                    <TouchableOpacity onPress={() => this.props.onOpen()}>
                        <Icon
                            name="menu"
                            size={30} color="white"
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Pantruc</Text>
                    {/* <Image
                        style={iconStyle}
                        source={
                            require('../../../media/appIcon/ic_logo.png')
                        }
                    /> */}
                    <Icon
                        name="cake"
                        size={30} color="white"
                    />
                </View>
                <SearchBar
                    round
                    // clearIcon={{ color: 'red' }}
                    searchIcon={true} // You could have passed `null` too
                    // onChangeText={someMethod}
                    // onClear={someMethod}
                    containerStyle={{
                        backgroundColor: '#000a12',
                        borderTopWidth: 0,
                        borderBottomWidth: 0
                    }}
                    placeholder='"What do you want to buy?'
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.13,
        backgroundColor: '#000a12',
        justifyContent: 'space-around'
    },
    rowContain1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    textInputStyle: {
        backgroundColor: 'white'
    },
    iconStyle: { height: 30, width: 30 },
    titleStyle: { color: '#FFF', fontSize: 20, }
});