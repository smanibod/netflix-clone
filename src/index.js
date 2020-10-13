import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'normalize.css';
import { Styles } from './styles'

ReactDOM.render(<Fragment>
<Styles />
<App />
</Fragment>, document.getElementById("root"));
