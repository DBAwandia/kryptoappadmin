import { useContext } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { LoginContext } from "./Context/LoginContext/LoginContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ModifyUser from "./Pages/ModifyUser/ModifyUser";
import Orders from "./Pages/Orders/Orders";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Users from "./Pages/Users/Users";
 
function App() {
  const ProtectedRoute = ( {children} ) =>{
    const { user } = useContext(LoginContext)
    if(!user){
      return <Navigate to="/login" />
    }else{
      return children
    }

  }
  return (
    <div >
      <Router>
        <Routes>

          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path="/users" element={<ProtectedRoute><Users/></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>} />
          <Route path="/modifyuser" element={<ProtectedRoute><ModifyUser/></ProtectedRoute>} />
          <Route path="/login" element={<Login/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
