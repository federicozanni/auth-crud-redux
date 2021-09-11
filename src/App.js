import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import Main from './routes/Main';
import store from './store';


function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Main />
      </Provider>
    </Fragment>
  );
}

export default App;
