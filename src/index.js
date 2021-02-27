import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "bootstrap-icons/font/bootstrap-icons.css";
import  {ThemeProvider}  from "./components/ThemeContext";
import { BucketProvider } from "./components/Products/BucketContext";


ReactDOM.render(
  <ThemeProvider>
    <BucketProvider>
      <React.StrictMode>
 
        <App />
   
    </React.StrictMode>
    </BucketProvider>    
  </ThemeProvider>,

  document.getElementById("root")
);
