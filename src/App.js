import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import './App.css';
import Home from './Pages/Home/Home';
import Users from './Pages/SidebarComponent/Users';
import Gallery from './Pages/SidebarComponent/Gallery';
import ContactUs from './Pages/SidebarComponent/ContactUs';
import Dashboard from './Pages/SidebarComponent/Dashboard';
function App() {
  return (
    <Router>
      <Route exact path='/' component={Login}/>
      <Route path='/home' component={Home} />
      <Route exact path='/home/gallery' component={Gallery} />
      <Route exact path='/home/contactus' component={ContactUs} />
      <Route exact path='/home/users' component={Users} />
      <Route exact path='/home/dashboard' component={Dashboard} />
    </Router>
  );
}

export default App;
