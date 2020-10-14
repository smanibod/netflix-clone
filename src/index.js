import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'normalize.css';
import { Styles } from './styles'
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'

ReactDOM.render(<Fragment>
    <FirebaseContext.Provider value={{firebase}}>
    <Styles />
    <App />
    </FirebaseContext.Provider>
</Fragment>, document.getElementById("root"));
