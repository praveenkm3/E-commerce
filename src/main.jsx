

import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client'
import './index.css'  
import routes from './components/Router.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { SearchContextProvider } from './assets/User/SearchContext.jsx';
const root=createRoot(document.getElementById('root'));



root.render(
  <> 
  <SearchContextProvider>
    <Provider store={store}>
      <RouterProvider router={routes} /> 
    </Provider>
  </SearchContextProvider>
  </>
)
