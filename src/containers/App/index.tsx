import React from 'react';
import {Provider} from 'react-redux';
import RootNavigation from '~containers/RootNavigation';
import store from '~store';

function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

export default App;
