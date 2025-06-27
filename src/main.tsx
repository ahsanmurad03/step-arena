import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/global.css'

// Import responsive CSS files
import './styles/responsive/mobilemediaquery.css'
import './styles/responsive/mobilequery425px.css'
import './styles/responsive/mobilequery768.css'
import './styles/responsive/mediaquery600px.css'
import './styles/responsive/mediaquery1024.css'
import './styles/responsive/mediaquery1440.css'

// Import responsive fixes
import './styles/responsive-fixes.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
) 