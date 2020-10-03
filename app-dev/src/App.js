import React from 'react';
import {Provider} from 'react-redux';
import { store }  from './store/store';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';
import './css/dashboard.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3'
    }
  }
});

function App() {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>

  );
}

export default App;
