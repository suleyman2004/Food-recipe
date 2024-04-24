import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./Pages/home/home";
import Details from "./Pages/details/details";
import Favorites from "./Pages/favorites/favorites";


function App() {
  return (
    <div className="App">
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorites/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
