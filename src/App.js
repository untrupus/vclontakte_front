import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Header from "./components/Header/Header";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";

import {useSelector} from "react-redux";

const ProtectedRoute = ({isAllowed, ...props}) => {
  return isAllowed ? <Route {...props} /> : <Redirect to="/"/>
};
const ProtectedSignRoute = ({isAllowed, ...props}) => {
  return isAllowed ? <Route {...props} /> : <Redirect to="/user"/>
};

function App() {
  const user = useSelector(state => state.user.user);
  return (
    <div className="App">
      <Header/>
      <Switch>
        <ProtectedSignRoute
          path="/"
          exact
          component={Login}
          isAllowed={!user}
        />
        <ProtectedSignRoute
          path="/register"
          exact
          component={Register}
          isAllowed={!user}
        />
        <ProtectedRoute
          path="/user"
          exact
          component={ProfilePage}
          isAllowed={user}
        />
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </div>
  );
}

export default App;
