import React from 'react'
import Dublin from "../../assets/dublin.jpeg"
import London from "../../assets/london.jpeg"
import Romania from "../../assets/Romania.jpeg"
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={Dublin}
            className="featuredImg"></img>
            
           <div className="featuredTitles">
               <h1>Dublin</h1>
               <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={London}
            className="featuredImg"></img>
            
           <div className="featuredTitles">
               <h1>London</h1>
               <h2>622 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src={Romania}
            className="featuredImg"></img>
            
           <div className="featuredTitles">
               <h1>Romania</h1>
               <h2>321 properties</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
