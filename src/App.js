import React, { Component } from "react";
import log from "winston";

class App extends Component {
  render() {
    log.info("foo");
    return <div />;
  }
}

export default App;
