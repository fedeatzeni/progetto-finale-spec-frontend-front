import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// per rendere il contesto disponibile in <App />
import GlobalProvider from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
)
