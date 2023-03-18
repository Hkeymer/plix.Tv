import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Detail from './components/moviesDetail/Detail';
import Search from "./components/Search/Search";
import Categorias from "./components/moviesCategorias/Categorias";
import Header from "./components/Header/Header";
import Error404 from "./components/Error404/Error404";


export const pathRoute = "/plix.Tv"


function App() {        

  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path={pathRoute} element={<Home/>} /> 
         <Route path={`${pathRoute}/search/movie`} element={<Search/>} /> 
         <Route path= {`${pathRoute}/movie/detail/:id`} element={<Detail/>} />  
         <Route path={`${pathRoute}/movies/:name`} element={<Categorias/>} />
         <Route path={`*`} element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
