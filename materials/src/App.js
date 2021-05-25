import { Switch } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { appRoutes } from './routes';
import { Route } from './components/route';

import './App.css';
import React, { useCallback, useReducer } from 'react';
import { UserForm } from './components/user-form';

export const Store = React.createContext();

const initialState = {
  user: null,
  isAuthenticated: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: payload,
        isAuthenticated: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
};

const useStore = () => {
  const [state, dispatch] = useReducer(initialState, reducer);

  const loginUser = useCallback((user) => {
    dispatch({
      type: 'LOGIN_USER',
      payload: user
    })
  }, []);

  const logoutUser = useCallback(() => {
    dispatch({
      type: 'LOGOUT_USER'
    })
  }, []);

  return {
    state,
    actions: {
      loginUser,
      logoutUser
    }
  };
};

const links = [
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/about',
    label: 'About'
  },
  {
    to: '/catalog',
    label: 'Products'
  },
  {
    to: '/contacts',
    label: 'Contacts'
  },
  {
    to: '/account',
    label: 'Account'
  }
];


function App() {
  const store = useStore();
  return (
    <Store.Provider value={store}>
      <div className="App">
        <header className="header">
          <Navigation links={links} />
          <UserForm />
        </header>

        <main className="content">
          <Switch>
            {appRoutes.map(route => (
              <Route key={route.path} {...route} />
            ))}
            <Route path='*'>
              <p>404: No Page Found</p>
            </Route>
            {/* <Route path='/' exact component={HomePage}>
          </Route>
          <Route path='/about' render={() => <AboutPage />}>
          </Route>
          <Route path='/contacts'>
            <ContactsPage />
          </Route> */}
          </Switch>
        </main>
      </div>
    </Store.Provider>
  );
}

export default App;
