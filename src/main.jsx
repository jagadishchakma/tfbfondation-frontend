import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './assets/css/global/responsive.css';
import App from './App';
import { GlobalContextProvider } from './contexts/GlobalContext';
import './tailwind.css';

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <RouterProvider router={App} />
  </GlobalContextProvider>
)
