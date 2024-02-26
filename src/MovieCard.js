import React from 'react'
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
  return (
    <div className='movie' >
       <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src={movie.posterUrl} alt='pic'/>
      <h1>{movie.title}</h1>
      <StarRatingComponent
     name="rate1"
     starCount={10}
     value={movie.rate}
     />
<p>{movie.rate}</p>
     
      <p class="type"></p>
    </div>
    
    <div class="movie_desc">
      <p class="text">
       {movie.description}
      </p>
    </div>
    <p class="minutes"><Link to={`/trailer/${movie.id}`}><p>trailer</p></Link></p>
  </div>
  <div class="blur_back bright_back" style={{backgroundImage: `url(${movie.posterUrl})`}}></div>
  
</div>

    </div>
  )
}

export default MovieCard