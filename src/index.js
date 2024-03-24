import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import MessageProvider from './Context/MessageProvider';
const options = {
  theme: 'green',
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MessageProvider>
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
  </MessageProvider>
);


