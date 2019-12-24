import React from 'react';
import './App.css';
import Form from './components/todolist/Form'
import DisplayList from './components/todolist/DisplayList'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form/>
        <DisplayList/> 
        <div className="line"></div>
      </div>
    </Provider>
  );
}

export default App;
