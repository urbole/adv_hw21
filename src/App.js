import {Route, Switch} from 'react-router-dom';
import { NavBar } from './components/navBar';
import { appRoutes } from './routes/index';
import React from 'react';
import './style/contacts.css';
import './style/gallery.css';
import './style/post.css';
import './style/home.css';
import './style/navbar.css';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="app_wrapper df fd_c">
      <header className="app_header">
        <NavBar />
      </header>
      <main className="app_content">
        <Switch>
          {appRoutes.map(route => (<Route key={route.path} {...route} />))}
          <Route path='*'>
            <p>404: No Page Found</p>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
