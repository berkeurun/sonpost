import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';



import postReducer from './reducers/postReducer';
const store = createStore(postReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));