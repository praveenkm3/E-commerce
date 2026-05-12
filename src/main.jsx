

import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client'
import './index.css'  
import routes from './components/Router.jsx';
const root=createRoot(document.getElementById('root'));
root.render(
  <> 
    <RouterProvider router={routes} /> 
  </>
)
