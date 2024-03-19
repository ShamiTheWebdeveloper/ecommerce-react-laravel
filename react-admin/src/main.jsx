import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx";
import {ContextProvider} from "./Context/ContextProvider.jsx";

import './assets/css/libs.bundle.css';
import './assets/css/theme.bundle.css';
import './assets/js/theme.bundle.js';
import './assets/js/vendor.bundle.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContextProvider>
          <RouterProvider router={router}/>
      </ContextProvider>
  </React.StrictMode>,
)
