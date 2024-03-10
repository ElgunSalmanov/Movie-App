import "./App.css";
import Header from "./shared/header/header";
import logo from "./assets/logo/logo.jpeg";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";
import Movie_Info from "./pages/movie-info/movie_info";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header logo={logo} title="Movie Site" subTitle="The Best Movie Site" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie_Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
