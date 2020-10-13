import React, { Component } from "react";

import { JumbotronContainer } from "./containers/jumbotron";
import { FooterContainer } from "./containers/footer";

class App extends Component {
  render() {
    return (
      <div>
        <JumbotronContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
