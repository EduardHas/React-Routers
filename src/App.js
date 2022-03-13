import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link, useParams}  from 'react-router-dom'
import List from './List'

const HomePage=()=>{
  return(<div>
    <h1>Home</h1>
    <div>this is blq blq</div>
  </div>)
}


const AboutUsPage=()=>{
  return(<div>
    <h1>AboutUs</h1>
    <div>this is blq blq</div>
  </div>)
}


const ItemPage=()=>{

  let {name} = useParams();

  return(<div>
    <h1>Item</h1>
    <div>{name}</div>
  </div>)
}


const CatPage=()=>{

  let {id} = useParams();
  let url = "https://assets.codepen.io/7656708/cat"+id+".jpg";
  return(<div>
    <h1>Item</h1>
    
    <div><img src={url}/></div>
  </div>)
}


const ItemsPage=()=>{
  return(<div>
    <h1>Items</h1>
    <div>this </div>
    <div>
    <h2>List of Items</h2>
    <ul>
    <li><Link to="/Items/Item/cola" >Cola</Link></li>
    <li><Link to="/Items/Item/pepsi" >Pepsi Cola</Link></li>
    <li><Link to="/Items/Item/water" >Cool Water</Link></li>
    <li><Link to="/Items/Item/Tesla" >Tesla Car</Link></li>
    </ul>
    </div>
  </div>)
}


function App() {
  return (
    <div className="App"> 
    123
    <BrowserRouter>
    456
    <Link to="/Home">Home</Link>*
    <Link to="/About">About our Company</Link>*
    <Link to="/Cats">Cats</Link>*
    <Link to="/Home/Items">See our Catalog</Link>
   
    <hr/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/About" element={<AboutUsPage/>}/>
      <Route path="/Cats" element={<List/>}/>
        <Route path="/Home/Items" element={<ItemsPage/>}/>
        <Route path="/Items/Item/:name" element={<ItemPage/>}/>
        <Route path="/Cats/Cat/:id" element={<CatPage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
