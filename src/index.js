import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/general";
import{ DataProvider,useUser} from './context/dataProvider';
ReactDOM.render(
  <Router>
    
    <ThemeProvider theme={theme}>

      <App />
  
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);


