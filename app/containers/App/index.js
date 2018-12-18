import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsAuthen, selectAuthen } from './selector';

import AppContent from '../../containers/AppContentView'
import SplashScreen from '../../components/SplashScreen'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <SplashScreen />
    }
  }
  componentWillMount() {
    setTimeout(() => {
      //IF FALSE NAVIGATE TO ERROR
      if (true) {
        this.setState({
          view: <AppContent isAuthen={this.props.isAuthen} authen={this.props.authen} />
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

const mapStateToProps = createStructuredSelector({
  isAuthen: selectIsAuthen(),
  authen: selectAuthen(),
});

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
