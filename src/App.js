import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import List from "./List";

const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>this is blq blq</div>
    </div>
  );
};

const AboutUsPage = () => {
  return (
    <div>
      <h1>AboutUs</h1>
      <div>this is blq blq</div>
    </div>
  );
};
// const AboutUsPage = () => {
//   return (
//     <div>
//       <h1>AboutUs</h1>
//       <div>this is blq blq</div>
//     </div>
//   );
// };

const ItemPage = () => {
  let { name } = useParams();

  return (
    <div>
      <h1>Item</h1>
      <div>{name}</div>
    </div>
  );
};

const CatPage = () => {
  let { id } = useParams();
  let url = "https://assets.codepen.io/7656708/cat" + id + ".jpg";
  return (
    <div>
      <h1>Item</h1>

      <div>
        <img src={url} />
      </div>
    </div>
  );
};

const ItemsPage = () => {
  return (
    <div>
      <h1>Items</h1>
      <div>this </div>
      <div>
        <h2>List of Items</h2>
        <ul>
          <li>
            <Link to="/Items/Item/cola">Cola</Link>
          </li>
          <li>
            <Link to="/Items/Item/pepsi">Pepsi Cola</Link>
          </li>
          <li>
            <Link to="/Items/Item/water">Cool Water</Link>
          </li>
          <li>
            <Link to="/Items/Item/Tesla">Tesla Car</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/Home">
          <strong>Home </strong>
        </Link>
        {"|||||| "}
        <Link to="/Home/Items">
          <strong> See our Catalog</strong>
        </Link>

        {"|||||| "}

        <Link to="/Home/Cart">
          <strong>Your_Cart</strong>
        </Link>

        <hr />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Home/Items" element={<ItemsPage />} />
          <Route path="/Items/Item/:name" element={<ItemPage />} />
          <Route path="/Items/Item/:name" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
