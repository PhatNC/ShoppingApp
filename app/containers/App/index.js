import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppContent from '../../components/AppContent'
import SplashScreen from '../../components/SplashScreen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <SplashScreen />
    }
  }
  componentWillMount() {
    // this.state = {
    //   view: <SplashScreen />
    // };


    setTimeout(() => {
      //IF FALSE NAVIGATE TO ERROR
      if (true) {
        this.setState({
          view: <AppContent />
        })
      } else {
        // this.setState({
        //   view: <Error />
        // })
        console.log('Error')
      }
    }, 2000) //TIME OF WAITING
  }

  render() {
    return (
      // <AppContent />
      this.state.view
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
