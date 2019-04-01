import React from 'react'

const Travel = ({ destination, country, photo, distance }) => (
   <figure>      
      <blockquote>{destination}</blockquote>
      <cite>{country}</cite>
      <cite>{photo}</cite>
      <cite>{distance}</cite>

   </figure>
)

export default Travel
