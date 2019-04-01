import React from "react";
import Travel from './Travel.js'
// src/Quotes.js
const travels = [
{
   destination: "Madrid ",
   country: "Spain ",
   photo: 'https://i.ibb.co/GF00wRS/Madrid.jpg',
   distance: "350 km " 
},
{
   destination: "London ",
   country: 'England ',
   photo: 'https://i.ibb.co/VtPhPbS/Londres.jpg',
   distance: "850 km "
},
{
   destination: "Madrid ",
   country: "Spain ",
   photo: 'https://i.ibb.co/GF00wRS/Madrid.jpg',
   distance: "350 km "
},
{
   destination: "Madrid ",
   country: "Spain ",
   photo: 'https://i.ibb.co/GF00wRS/Madrid.jpg',
   distance: "350 km "
},          
{
   destination: "Madrid ",
   country: "Spain ",
   photo: 'https://i.ibb.co/GF00wRS/Madrid.jpg',
   distance: "350 km "
},
];

const Travels = () => (
   <div>
      {travels.map(travel => (
         <Travel {...travel} />
      ))}
   </div>
);

export default Travels;