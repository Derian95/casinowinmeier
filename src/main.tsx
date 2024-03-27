import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ReactRouterProvider } from './providers/RouterProvicer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactRouterProvider/>
  </React.StrictMode>,
)
