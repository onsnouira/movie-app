import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Trailer = ({movie}) => {
    const {id} = useParams()
    const foundMovie = movie.find(movie => movie.id === +id)
  return (
    <div>
        <p>{foundMovie.title}</p>
        <p>{foundMovie.description}</p>
        <iframe width="560" height="315" src={foundMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <Link to="/"><button>Back to home</button></Link> 
    </div>
  )
}

export default Trailer