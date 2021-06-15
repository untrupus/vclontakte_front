import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import EditProfile from "./containers/EditProfile/EditProfile";
import FriendList from "./containers/FriendList/FriendList";
import MusicPage from "./containers/MusicPage/MusicPage";
import PhotoPage from "./containers/PhotoPage/PhotoPage";
import MyGroupsPage from "./containers/MyGroupsPage/MyGroupsPage";
import CreateGroupPage from "./containers/CreateGroupPage/CreateGroupPage";
import SingleGroupPage from "./containers/SingleGroupPage/SingleGroupPage";
import Messenger from "./containers/Messenger/Messenger";
import NewsPage from "./containers/NewsPage/NewsPage";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ isAllowed, ...props }) => {
  return isAllowed ? <Route {...props} /> : <Redirect to="/" />;
};
const ProtectedSignRoute = ({ isAllowed, user, ...props }) => {
  return isAllowed ? (
    <Route {...props} />
  ) : (
    <Redirect to={"/user/" + user.user._id} />
  );
};

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="App">
      <Header />
      <Switch>
        <ProtectedSignRoute
          path="/"
          exact
          user={user}
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
          path="/user/:id"
          exact
          component={ProfilePage}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/edit"
          exact
          component={EditProfile}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/friends"
          exact
          component={FriendList}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/photo"
          exact
          component={PhotoPage}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/music"
          exact
          component={MusicPage}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/mygroups"
          exact
          component={MyGroupsPage}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/creategroup"
          exact
          component={CreateGroupPage}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/messenger"
          exact
          component={Messenger}
          isAllowed={user}
        />
        <ProtectedRoute
          path="/news"
          exact
          component={NewsPage}
          isAllowed={user}
        />
        <Route path="/groups/:id" exact component={SingleGroupPage} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
