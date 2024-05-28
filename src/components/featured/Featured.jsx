import React from 'react';
import "./featured.scss";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the best <span>freelancer</span>  for your   business</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt=""/>
                        <input type="text" placeholder='Try "building mobile app" '/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular</span>
                    <button>Web Design </button>
                    <button> Logo </button>
                    <button> Taxes</button>
                    <button> AI Service</button>
                  
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt=""/>
            </div>
            =
        </div>
    </div>
  )
}

export default Featured