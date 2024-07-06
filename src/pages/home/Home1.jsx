// import React from 'react'
// import Featured from '../../components/featured/Featured';
// import Slide from '../../components/slide/Slide';
// // import CatCard from '../../components/catCard/CatCard';

// import { cards, projects } from "../../data";
// const Home = () => {
//   return (
//     <div className='home'>

//       <Featured/>
//       <Slide/>
//     </div>
//   )
// }

// export default Home

import React from 'react'
import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
// import CatCard from '../../components/catCard/CatCard';
import "./Home.scss";
import { cards, projects } from "../../data";
const Home = () => {
  return (
    <div className='home'>

      <Featured/>
      <Slide/>
      <div className='features'>
        <div className='container'>
          <div className='item'>
            <h1>A whole world of freelance talent at your fingerprints</h1>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
            <div className='title'>
              <img src='./img/check.png' alt='' />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project based pricing.
            </p>
          </div>
          <div className='item'>
            <video src='./img/videoww.mp4' controls></video>
          </div>
        </div>
      </div>
      <div className='features dark'>
        <div className='container'>
          <div className='item'>
            <h1>Work Wave</h1>
            <h1>A business solution deigned for teams</h1>
            <p>
              Upgrade to a curated experience packed with tools and benefilts,
              dedicated to businesses
            </p>
            <div className='title'>
              <img src='./img/check.png' alt=''/>
              connect to freelancers with proven business experience
            </div>
            <div className='title'>
              <img src='./img/check.png' alt=''/>
              connect to freelancers with proven business experience
            </div>
            <div className='title'>
              <img src='./img/check.png' alt=''/>
              connect to freelancers with proven business experience
            </div>
            <button>Explore Work Wave</button>
          </div>
          <div className='itemimg'>
            <img src='./img/darkbanner.png'/>
          </div>
        </div>
      </div>
      
    </div>
    
    
  );
};

export default Home