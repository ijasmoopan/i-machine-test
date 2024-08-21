import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes";

const App = () => {
  return (
    <Router>
      <GlobalStyles />

      <AppRoutes />
    </Router>
  );
};

export default App;
