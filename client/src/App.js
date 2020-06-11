import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import ProfilePage from "./HomePage";
<<<<<<< HEAD
<<<<<<< HEAD
import LandingPage from './components/landingpage/LandingPage';
import NavBar from './components/nav/Nav';
import ProfilePage from './components/profile/Profile';
import Connect from './components/connect/Connect';
import Browse from './components/browse/Browse';


=======
=======
>>>>>>> 6b913dd5e112a7a7016c521b7346775e26f9ad02
import LandingPage from "./components/landingpage/LandingPage";
import NavBar from "./components/nav/Nav";
import Footer from "./components/footerMusic/Footer";
import ProfilePage from "./components/profile/Profile";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import Connect from "./components/connect/Connect";
import Browse from "./components/browse/Browse";
<<<<<<< HEAD

import Signin from "./components/login/signin";

>>>>>>> 58d6eb358e87fd6131ef63598904f3c36117b644
=======

import Signin from "./components/login/signin";

>>>>>>> 6b913dd5e112a7a7016c521b7346775e26f9ad02
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
