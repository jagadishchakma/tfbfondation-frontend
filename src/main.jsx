import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/css/global/responsive.css';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={App} />
    </GlobalContextProvider>
  </StrictMode>
)
