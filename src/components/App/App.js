import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import { useState } from "react";


function App() {
  const [loggedIn, setloggedIn] = useState(true);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Main  loggedIn={loggedIn} />} />
        <Route path="/movies" element={<Movies  loggedIn={loggedIn}/>} />
        <Route path="/saved-movies" element={<SavedMovies  loggedIn={loggedIn}/>} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn}  />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
