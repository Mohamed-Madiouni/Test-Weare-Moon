import './App.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

function App() {
  return (
    <div className="App" style={{ paddingTop: 70 }}>
     <div className="App_center">
        <Navbar />
        <div className="home-page" style={{background:'url(/sources/home_welcome.png)'}}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia, nemo quibusdam esse assumenda maiores libero laboriosam modi magnam delectus tenetur officia consequatur veritatis unde, dolore quod aperiam soluta impedit.</p>
        </div>
        
        {/* <div className="home">
<img src="/sources/home_welcome.png" alt=""/>

        </div> */}
</div>
<Footer/>
    </div>
  );
}

export default App;
