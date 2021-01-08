import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Boutique from './pages/Boutique';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style={{ paddingTop: 70 }}>
     <div className="App_center">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/boutique" component={Boutique} />
          <Route  path="*" render={()=><h1 style={{marginTop:100,padding:30}} >404 Page introuvable</h1>} />
          </Switch>
        
</div>
<Footer/>
    </div>
  );
}

export default App;
