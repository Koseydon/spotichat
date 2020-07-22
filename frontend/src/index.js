import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Provider, Observer } from "mobx-react";
import Store from "./Store";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    text: {
      primary: "#9e9e9e",
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    text: {
      primary: "#9e9e9e",
    },
  },
});

ReactDOM.render(
  <Provider Store={Store}>
    <Observer>
      {() => (
        <ThemeProvider theme={Store.isDarkMode ? darkTheme : lightTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      )}
    </Observer>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
