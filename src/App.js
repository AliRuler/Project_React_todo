import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import router from './routes/routes';
import { persistor } from './toolkit/store';
import store from './toolkit/store';
import { RouterProvider } from "react-router-dom";
import {PersistGate} from  "redux-persist/integration/react";
function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
  </Provider>
)}

export default App;
