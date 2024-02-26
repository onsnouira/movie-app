import React from 'react'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Add from './Add';


const MovieList = ({movies,addMovie}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='list'>
        {movies.map((movie) => <MovieCard movie={movie}/>)}
        <div className='movie' id='addMovie'>
          <i onClick={handleShow} class="fa-solid fa-plus fa-2xl" style={{color: "rgb(134, 134, 133)", fontSize:160 , marginTop: 180 ,marginLeft: 60, marginRight:60 , cursor:"pointer"}}></i>
          <Add className='movie' addMovie={addMovie} show={show} handleClose={handleClose}/>
        </div>

    </div>
  )
}

export default MovieList