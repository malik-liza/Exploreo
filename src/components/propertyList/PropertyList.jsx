import React from 'react'
import './PropertyList.css';
import Dubai from '../../assets/dubai.jpeg'
import Australia from '../../assets/australia.jpeg'
import Seoul from '../../assets/seoul.jpeg'
import Greenland from '../../assets/greenland.jpeg'
import hotel from '../../assets/hotel3.jpeg'



const PropertyList = () => {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={Dubai}
            className="pListImage"></img>
            <div className="pListTitles">
               <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Australia}
            className="pListImage"></img>
            <div className="pListTitles">
               <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Seoul}
            className="pListImage"></img>
            <div className="pListTitles">
               <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={Greenland}
            className="pListImage"></img>
            <div className="pListTitles">
               <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={hotel}
            className="pListImage"></img>
            <div className="pListTitles">
               <h1>Hotels</h1>
              <h2>233 hotels</h2>
            </div>
        </div>
      
    </div>
  )
}

export default PropertyList
