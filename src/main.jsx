import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes'
import store from './INFRA/REDUX/store'
import { Provider } from 'react-redux'

import {
  BrowserRouter,
  BrowserRouter as Router
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />    
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
