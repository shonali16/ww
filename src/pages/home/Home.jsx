import React from 'react'
import Featured from '../../components/featured/Featured';
import Slide from '../../components/slide/Slide';
// import CatCard from '../../components/catCard/CatCard';

import { cards, projects } from "../../data";
const Home = () => {
  return (
    <div className='home'>

      <Featured/>
      <Slide/>
    </div>
  )
}

export default Home