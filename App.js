import React, { Component } from "react";
import AppContent from "./app/components/AppContent";
import SplashScreen from "./app/components/SplashScreen";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: <SplashScreen />
    };
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
        });
      } else {
        // this.setState({
        //   view: <Error />
        // })
        console.log("Error");
      }
    }, 2000); //TIME OF WAITING
  }

  render() {
    return (
      // <AppContent />
      this.state.view
    );
  }
}
