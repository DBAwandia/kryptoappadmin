import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SidebarContextProvider } from './Context/SidebarContext/SidebarContext';
import { LoginContextProvider } from './Context/LoginContext/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </LoginContextProvider>
  </React.StrictMode>
);

reportWebVitals();
