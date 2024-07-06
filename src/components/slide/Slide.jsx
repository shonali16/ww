// import React from 'react';
// import CatCard from '../catCard/CatCard.jsx';
// import Slider from 'infinite-react-carousel';
// import "./Slide.scss";


// import { cards } from "../../data.js";

// const Slide = () => {
//   return (
//     <div className='slide'>
//       <Slider dots>
//         {cards.map(card => (
//           <CatCard key={card.id} item={card} />
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Slide;

import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel';
import CatCard from '../catCard/CatCard';
import {cards} from "../../data"
const Slide = () => {
  return (
    <div className='slide'>
      <div className='container'>
      <Slider slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard item={card} key={card.id}/>
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default Slide
