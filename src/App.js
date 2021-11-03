import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';
import AboutUs from './component/AboutUs/AboutUs';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import Login from './component/Login/Login';
import AuthProvider from './Context/AuthProvider';
import useAuth from './hooks/useAuth';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute exact path='/serviceDetail/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path='/aboutUs'>
              <AboutUs></AboutUs>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
