import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <Nav />
      <div className='App_content_wrapper'>
        <Route path='/dialogs' render={() => <DialogsContainer/>} />
        <Route path='/profile/:userId?' render={() => <ProfileContainer/>} />
        <Route path='/users' render={() => <UsersContainer/>} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}
export default App;
