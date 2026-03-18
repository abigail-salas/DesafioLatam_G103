import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Personaje from "./views/Personaje";
import Admin from "./views/Admin";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/personaje/:id" element={<Personaje />} />
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </>
  );
}

export default App;
