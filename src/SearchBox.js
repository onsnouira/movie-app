import React, { useState } from 'react'
import StarRatingComponent from 'react-star-rating-component';

const SearchBox = ({search, searchrating, searchRate}) => {
  const[rating,setRating]= useState(1)
  const onStarClick=(nextValue)=>{
    searchrating(nextValue);}

  return (
    <center>
    <div>
        <input
        className='search-box'
			type='text'
			onChange={(event) => search(event.target.value)}
			placeholder='Type to search...'
		></input>
    <label for="search-box"><i className="fa-solid fa-magnifying-glass search-icon"></i></label>
    <input type="submit" id="search-submit" />
     <StarRatingComponent
     name="rate1"
     starCount={10}
     value={searchRate}
     onStarClick={onStarClick}
     />
    </div>
    </center>
  )
}

export default SearchBox