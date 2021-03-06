import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SearchContainer from "./components/Search/SearchContainer"


const App = (props) => {
  // debugger;
  return (
    
      <div className='app-wrapper'>
    
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/search' render={() => <SearchContainer />} />
          
        </div>

      </div>
  );
}

export default App;
