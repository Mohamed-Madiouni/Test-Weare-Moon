import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style={{ paddingTop: 70 }}>
     <div className="App_center">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
        
</div>
<Footer/>
    </div>
  );
}

export default App;
