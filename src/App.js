import { BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Orders/Orders";
import Users from "./Pages/Users/Users";
 
function App() {
  return (
    <div >
      <Router>
        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/orders" element={<Orders/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
