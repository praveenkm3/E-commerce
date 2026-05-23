

import { RouterProvider } from 'react-router';
import { createRoot } from 'react-dom/client'
import './index.css'  
import routes from './components/Router.jsx';
import { store } from './store.js';
import { Provider } from 'react-redux';
import { SearchContextProvider } from './assets/User/SearchContext.jsx';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const root=createRoot(document.getElementById('root'));

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"', 
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

root.render(
  <> 
  <ThemeProvider theme={theme}>
    <CssBaseline />
  <SearchContextProvider>
    <Provider store={store}>
      <RouterProvider router={routes} /> 
    </Provider>
  </SearchContextProvider>
    </ThemeProvider>
  </>
)
