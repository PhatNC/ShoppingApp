import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  LayoutAnimation,
  UIManager,
  KeyboardAvoidingView,
  TextInput,
  Keyboard
} from 'react-native';
import { FormInput, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const BG_IMAGE = require('../../media/img/logo.png');

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

const TabSelector = ({ selected }) => {
  return (
    <View style={styles.selectorContainer}>
      <View style={selected && styles.selected} />
    </View>
  );
};

TabSelector.propTypes = {
  selected: PropTypes.bool.isRequired,
};

export default class Authentication extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      //fontLoaded: false,
      selectedCategory: 0,
      // isLoading: false,
      isEmailValid: true,
      isPasswordValid: true,
      isConfirmationValid: true,
    };

    // this.selectCategory = this.selectCategory.bind(this);
    // this.login = this.login.bind(this);
    // this.signUp = this.signUp.bind(this);
  }

  //   async componentDidMount() {
  //     await Font.loadAsync({
  //       'georgia': require('../../../assets/fonts/Georgia.ttf'),
  //       'regular': require('../../../assets/fonts/Montserrat-Regular.ttf'),
  //       'light': require('../../../assets/fonts/Montserrat-Light.ttf'),
  //     });

  //     this.setState({ fontLoaded: true });
  //   }

  selectCategory(selectedCategory) {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      selectedCategory,
      // isLoading: false,
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);
  }

  login() {
    const {
      email,
      password,
    } = this.state;
    this.props.loginRequest({ email, password });
  }

  signUp() {
    const {
      email,
      password,
      passwordConfirmation,
    } = this.state;
    // this.setState({ isLoading: true });

    // Simulate an API call
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
      });
      this.props.navigation.navigate('SHOP');
    }, 1500);

  }

  render() {
    const {
      selectedCategory,
      // isLoading,
      isEmailValid,
      isPasswordValid,
      isConfirmationValid,
      email,
      password,
      passwordConfirmation,
    } = this.state;
    const isLoginPage = selectedCategory === 0;
    const isSignUpPage = selectedCategory === 1;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={BG_IMAGE}
          style={styles.bgImage}
        >
          <View style={styles.loginContainer}>
            <KeyboardAvoidingView behavior='position'>
              <View style={styles.buttonGroup}>
                <Button
                  // disabled={isLoading}
                  clear
                  activeOpacity={0.7}
                  onPress={() => this.selectCategory(0)}
                  buttonStyle={{
                    width: SCREEN_WIDTH * 0.455,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15
                  }}
                  // titleStyle={[styles.categoryText, isLoginPage && styles.selectedCategoryText]}
                  title={'Login'}
                  backgroundColor='white'
                  fontWeight='bold'
                  fontSize={20}
                  color={isLoginPage ? 'black' : '#D7D7D7'}
                />
                <Button
                  // disabled={isLoading}
                  clear
                  activeOpacity={0.7}
                  onPress={() => this.selectCategory(1)}
                  buttonStyle={{
                    width: SCREEN_WIDTH * 0.455,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15
                  }}
                  // titleStyle={[styles.categoryText, isSignUpPage && styles.selectedCategoryText]}
                  title={'Sign up'}
                  backgroundColor='white'
                  fontWeight='bold'
                  fontSize={20}
                  color={isSignUpPage ? 'black' : '#D7D7D7'}
                />
              </View>

              <View style={styles.rowSelector}>
                <TabSelector selected={isLoginPage} />
                <TabSelector selected={isSignUpPage} />
              </View>

              <View style={styles.formContainer}>
                <View style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 10,
                  paddingTop: 5,
                  alignItems: 'center',
                }}>
                  <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon
                      name='envelope'
                      color='black'
                      size={20}
                    />
                  </View>

                  <TextInput
                    style={{
                      flex: .8,
                      paddingRight: 20,
                      borderBottomWidth: 1,
                    }}
                    placeholder='Email'
                    keyboardType="email-address"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />

                </View>

                <View style={{
                  flexDirection: 'row',
                  width: '100%',
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingBottom: 10,
                  paddingTop: 5,
                  alignItems: 'center',
                }}>
                  <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon
                      name='lock'
                      color='black'
                      size={20}
                    />
                  </View>

                  <TextInput
                    style={{
                      flex: .8,
                      paddingRight: 20,
                      borderBottomWidth: 1,
                    }}
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                  />

                </View>
                {isSignUpPage &&
                  <View style={{
                    flexDirection: 'row',
                    width: '100%',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                    alignItems: 'center',
                  }}>
                    <View style={{ flex: .2, justifyContent: 'center', alignItems: 'center' }}>
                      <Icon
                        name='unlock'
                        color='black'
                        size={20}
                      />
                    </View>

                    <TextInput
                      style={{
                        flex: .8,
                        paddingRight: 20,
                        borderBottomWidth: 1,
                      }}
                      placeholder='Confirm Password'
                    />
                  </View>
                }
                <Button
                  buttonStyle={isLoginPage ? styles.loginButton : styles.signupButton}
                  containerStyle={{ marginTop: 32, flex: 0 }}
                  activeOpacity={0.8}
                  title={isLoginPage ? 'LOGIN' : 'SIGN UP'}
                  onPress={isLoginPage ? () => this.login() : () => this.signUp()}
                  titleStyle={styles.loginTextButton}
                // loading={isLoading}
                // disabled={isLoading}
                />
              </View>
            </KeyboardAvoidingView>

            <View style={styles.helpContainer}>
              <Button
                title={'Need help ?'}
                titleStyle={{ color: 'white' }}
                buttonStyle={{ backgroundColor: 'transparent' }}
                underlayColor='transparent'
                onPress={() => console.log('Account created')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowSelector: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  selected: {
    position: 'absolute',
    borderRadius: 50,
    height: 0,
    width: 0,
    top: -5,
    borderRightWidth: 70,
    borderBottomWidth: 70,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  loginContainer: {
    backgroundColor: '#1F353B',
    //justifyContent: 'flex-start',
    //alignItems: 'center',
    width: '100%',
    height: SCREEN_HEIGHT * 0.6,
    padding: 15,
  },
  loginTextButton: {
    color: 'white',
    fontWeight: 'bold',
    fontWeight: '400'
  },
  loginButton: {
    backgroundColor: '#00C853',
    borderRadius: 10,
    height: 45,
    width: 150,
  },
  signupButton: {
    backgroundColor: '#0091EA',
    borderRadius: 10,
    height: 45,
    width: 150,
  },
  titleContainer: {
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  bgImage: {
    flex: 1,
    top: 0,
    left: 0,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  categoryText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontFamily: 'light',
    backgroundColor: 'transparent',
    opacity: 0.54,
  },
  selectedCategoryText: {
    opacity: 1,
  },
  titleText: {
    color: '#32C0C8',
    fontSize: 30,
    fontFamily: 'regular',
    fontWeight: 'bold'
  },
  helpContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  inactiveText: {
    color: '#D7D7D7'
  },
  activeText: {
    color: 'black',
    justifyContent: 'space-around',
    //alignItems: 'center',
    //padding: 5
  }
});
