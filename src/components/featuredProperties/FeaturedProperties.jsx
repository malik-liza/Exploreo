import React from 'react'
import hotel1 from '../../assets/dubai.jpeg'
import hotel2 from '../../assets/hotel2.jpeg'
import hotel3 from '../../assets/hotel3.jpeg'
import './FeaturedProperties.css';


const FeaturedProperties = () => {
  return (
    <div className="fp">
        {/* <div className="fpItem">
            <img src={hotel1} className="fpImage"/>
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                  <button>8.9</button>
                  <span>Excellent</span>  
            </div>
        </div> */}
        <div className="fpItem">
            <img src={hotel2} className="fpImage"/>
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                  <button>9.1</button>
                  <span>Excellent</span>  
            </div>
        </div>
        <div className="fpItem">
            <img src={hotel3} className="fpImage"/>
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpCity">Austin</span>
            <span className="fpPrice">Starting from $140</span>
           
            <div className="fpRating">
                  <button>8.2</button>
                  <span>Good</span>  
            </div>
        </div>
        <div className="fpItem">
            <img src={hotel1} className="fpImage"/>
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpCity">Austin</span>
            <span className="fpPrice">Starting from $140</span>
           
            <div className="fpRating">
                  <button>8.2</button>
                  <span>Good</span>  
            </div>
        </div>
        <div className="fpItem">
            <img src={hotel2} className="fpImage"/>
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Madrid</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                  <button>9.1</button>
                  <span>Excellent</span>  
            </div>
        </div>
      
    </div>
  )
}

export default FeaturedProperties
