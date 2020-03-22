import React from 'react';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import AppRouter from "./app/routes/routes";
import theme from "./app/theme";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
