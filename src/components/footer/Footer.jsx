// import React from 'react';
import "./Footer.scss";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div className="container">
//         <div className="top">
//           <div className="item">
//             <h2>About Us</h2>
//           </div>
//           <div className="item">
//             <h2>Community</h2>
//           </div>
//           <div className="bottom">
//             <div className="left">
//               <h2>syuii</h2>
//               <span>@ sonali International Ltd </span>
//             </div>
//             <div className="right">
//               <div className="social">
//                 <img src="/img/twitter.png" alt=""/>
//               </div>
//               <div className="link">
//               <img src="/img/language.png" alt="" />
//               <span>English</span>
//             </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
      <div className="bottom">
          <div className="left">
            <h2>WorkWave</h2>
            <span>© WorkWave International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/world.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer