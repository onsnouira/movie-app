import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route}  from "react-router-dom"
import Trailer from './Trailer';

function App() {
  const[movies,setMovies]= useState([
    {id:1,title:"Divergent",description:"In a world divided into five clans according to their virtues, Tris learns that she is divergent and that she will not join any of the clans. When she uncovers a plot to destroy the Divergents, Tris and the mysterious Four will have to discover what makes the Divergents dangerous before it's too late.",posterUrl:"https://m.media-amazon.com/images/I/61aIZgksRoS._AC_UF894,1000_QL80_.jpg",rate:"6.6",trailer:"https://www.youtube.com/embed/sutgWjz10sM?si=GKAaekPgIpdtImf_"},
    {id:2,title:"Five feet apart",description:"A pair of teenagers with cystic fibrosis meet in a hospital and fall in love, though their disease means they must avoid close physical contact.",posterUrl:"https://m.media-amazon.com/images/I/91peNMyOtEL.jpg",rate:"7.2",trailer:"https://www.youtube.com/embed/24YrEAGF32M?si=dtAk2Rp0x03X4Uht"},
    {id:3,title:"The maze runner",description:"Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow 'runners' for a shot at escape.",posterUrl:"https://m.media-amazon.com/images/I/51S7srUIWIL._AC_UF1000,1000_QL80_.jpg",rate:"6.2",trailer:"https://www.youtube.com/embed/64-iSYVmMVY?si=QNQlLslqmTc0nUjt"},
    {id:4,title:"The Shawshank Redemption",description:"Andy Dufresne , a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death penalty, he is given two consecutive life sentences and sent to the notoriously harsh Shawshank Prison.",posterUrl:"https://m.media-amazon.com/images/I/815qtzaP9iL._AC_UF894,1000_QL80_.jpg",rate:"7.4",trailer:"https://www.youtube.com/embed/PLl99DlL6b4?si=8RYTNN0BC8bzrkjS"},
    {id:5,title:"The Silence of the Lambs",description:"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",posterUrl:"https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",rate:"8.6",trailer:"https://www.youtube.com/embed/RuX2MQeb8UM?si=sbrRqYOyolcbbnXr"},
    {id:6,title:"Encanto",description:"A Colombian teenage girl has to face the frustration of being the only member of her family without magical powers.",posterUrl:"https://m.media-amazon.com/images/I/91Yxt30M0XL._AC_UF894,1000_QL80_.jpg",rate:"7.2",trailer:"https://www.youtube.com/embed/2-TUIfpfjkM?si=Q81F22HOFstdSlew"},
  ])

  const [searchValue, setSearchValue] = useState('');
  const [searchRate, setSearchRate] = useState(1);
  const search=(value)=>{
    setSearchValue(value)
   
  }
  const searchrating=(rate)=>{
    setSearchRate(rate)
  }

  const addMovie=(movie)=>{
    setMovies(movies.concat(movie))
  }
  return (
    <div className="App">
      
      <SearchBox search={search} searchrating={searchrating} searchRate={searchRate}/>
      <br/>
      <Routes>
        <Route path="/" element={<div> <Add addMovie={addMovie}/>
      <MovieList addMovie={addMovie} movies={movies.filter(el=> el.rate >= searchRate || el.title.toLowerCase().includes(searchValue.toLowerCase().trim()))}/></div>}/>
      <Route path="/trailer/:id" element={<Trailer movie={movies}/>} />
      </Routes>
     
      
    </div>
  );
  
}

export default App;