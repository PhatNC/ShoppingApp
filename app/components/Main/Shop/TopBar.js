import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';


const { height, width } = Dimensions.get('window');


export default class TopBar extends Component {
    render() {
        const { wrapper, rowContain1, textInputStyle, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={rowContain1}>
                    <TouchableOpacity onPress={() => this.props.onOpen()}>
                        <Image
                            style={iconStyle}
                            source={
                                require('../../../media/appIcon/ic_menu.png')
                            }
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image
                        style={iconStyle}
                        source={
                            require('../../../media/appIcon/ic_logo.png')
                        }
                    />
                </View>
                <TextInput
                    style={textInputStyle}
                    placeholder="What do you want to buy?"
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8,
        backgroundColor: '#34B089', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    rowContain1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInputStyle: { 
        height: height / 20, backgroundColor: 'white', paddingLeft: 10, 
    },
    iconStyle: { height: 30, width: 30 },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20, }
});