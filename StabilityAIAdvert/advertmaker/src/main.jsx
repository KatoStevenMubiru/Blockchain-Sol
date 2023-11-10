import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import dotenv from 'dotenv';
import TextToImageComponent from './components/adMaker.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TextToImageComponent/>
  </React.StrictMode>,
)
