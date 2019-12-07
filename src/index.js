import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { Router } from 'react-router';

// Internal dependencies
import Root from './routes/Root';
import { store, persistor } from './state/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import history from './routes/history';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

const config = {
  google: {
    families: ['Roboto', 'Muli', 'Neuropol'],
  }
};

const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: '#096d74',
    primary1Color: '#1445b3',
  },
  appBar: {
    height: 50,
  },
});

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <WebfontLoader config={config}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={history}>
              <Root />
            </Router>
          </MuiThemeProvider>
        </WebfontLoader>
      </PersistGate>
      </Provider>
    </AppContainer>
  ), document.getElementById('root'));
};

// initial render
render();