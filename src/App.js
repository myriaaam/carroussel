
import './App.css';

import welcome from "./welcome.jpg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
function App() {

const responsive = {
superLargeDesktop: {
// the naming can be any, depends on you.
breakpoint: { max: 4000, min: 3000 },
items: 5
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464},
items: 2
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};
return (
  <div className="App">
  
  
  <h1>React multi carousel</h1>
  <Carousel responsive={responsive}>
  

<div><img className='product--image' src={welcome} alt=""/>
  <h2>Reebok</h2>
  <p className='price'>$20.00</p>
  <p>Chausssure de sport</p>
  <p>
  <button>Ajout au panier</button>
  </p>
  
</div>

<div><img className='product--image' src={welcome} alt=""/>
  <h2>Reebok</h2>
  <p className='price'>$20.00</p>
  <p>Chausssure de sport</p>
  <p>
  <button>Ajout au panier</button>
  </p>
  </div>

  <div><img className='product--image' src={welcome} alt=""/>
  <h2>Reebok</h2>
  <p className='price'>$20.00</p>
  <p>Chausssure de sport</p>
  <p>
  <button>Ajout au panier</button>
  </p></div>

  <div><img className='product--image' src={welcome} alt=""/>
  <h2>Reebok</h2>
  <p className='price'>$20.00</p>
  <p>Chausssure de sport</p>
  <p>
  <button>Ajout au panier</button>
  </p></div>
</Carousel>
</div>
  
 
  );
  }
 



 export default App