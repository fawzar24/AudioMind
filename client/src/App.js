import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ProfilePage from "./HomePage";
<<<<<<< HEAD
import LandingPage from './components/landingpage/LandingPage';
import NavBar from './components/nav/Nav';
import ProfilePage from './components/profile/Profile';
import Connect from './components/connect/Connect';
import Browse from './components/browse/Browse';


=======
import LandingPage from "./components/landingpage/LandingPage";
import NavBar from "./components/nav/Nav";
import Footer from "./components/footerMusic/Footer";
import ProfilePage from "./components/profile/Profile";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import Connect from "./components/connect/Connect";
import Browse from "./components/browse/Browse";

import Signin from "./components/login/signin";

>>>>>>> 58d6eb358e87fd6131ef63598904f3c36117b644
function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <div>
        <Switch>
          <Route path="/profile" component={ProfilePage} exact />
          <Route path="/connect" component={Connect} exact />
          <Route path="/browse" component={Browse} exact />
          <Route path='/favorites' component={FavoritesPage} exact/>
          <Route path="/"  exact><LandingPage/></Route>

          
          <Route path="/signin" component={Signin} exact />
          {/* <Route path="/profilepage"><Profile/></Route> */}
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
