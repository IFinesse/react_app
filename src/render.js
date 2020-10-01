import React from 'react';
import ReactDOM from 'react-dom';
import './index';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import state from "./redux/state";
import {addPost, updatePostMessageChange} from "./redux/state"
import {BrowserRouter} from 'react-router-dom';




export let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} addPost={addPost} updatePostMessageChange={updatePostMessageChange}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }