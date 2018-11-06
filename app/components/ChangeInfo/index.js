import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import { Icon } from 'react-native-elements';

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        // const { name, address, phone } = props.user;
        this.state = {
            txtName: 'Shin Seijuro',
            txtAddress: 'shinseijuro123@gmail.com',
            txtPhone: '0123-456-798'
        };
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <Icon
                        name="arrow-back"
                        size={25} color="white"
                        onPress={() => this.props.navigation.goBack()} />
                    <Text style={styles.headerTitle}>Change Information</Text>
                    <View />
                </View>
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={this.state.txtName}
                        onChangeText={text => this.setState({ txtName: text })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={this.state.txtAddress}
                        onChangeText={text => this.setState({ txtAddress: text })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={this.state.txtPhone}
                        onChangeText={text => this.setState({ txtPhone: text })}
                    />
                    <TouchableOpacity style={styles.signInContainer}>
                        <Text style={styles.signInTextStyle}>CHANGE YOUR INFOMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: '#fff' },
    header: { flex: 1, backgroundColor: '#000a12', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    body: { flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center' },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#000a12',
        borderWidth: 1
    },
    signInTextStyle: {
        color: '#FFF', fontFamily: 'Avenir', fontWeight: '600', paddingHorizontal: 20
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#00C853',
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    signInStyle: {
        flex: 3,
        marginTop: 50
    }
});
