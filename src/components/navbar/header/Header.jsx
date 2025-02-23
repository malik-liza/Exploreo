import React from 'react'
import './Header.css';
import { FaBed } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { MdCarRental } from "react-icons/md";
import { MdAttractions } from "react-icons/md";
import { IoCarSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaPerson } from "react-icons/fa6";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from "react-date-range";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { format } from "date-fns";

const Header = () => {
  const [destination,setDestination]=useState("");
  const [openDate,setOpenDate]=useState(false);
  const[date,setDate]=useState([
    {
      startDate:new Date(),
      endDate: new Date(),
      key:"selection",
    },


  ])
  const[openOptions,setOpenOptions]=useState(false);
  const[options,setOptions]=useState(
    {
      adult:1,
    children:0,
    room:1,
  }
  )
  const handleOption=(name,operation)=>{
    setOptions((prev)=>{
      return {
        ...prev,
        [name]:operation==="i"? options[name]+1:options[name]-1,
      }
    })
  }
  const navigate=useNavigate();
  const handleSearch=()=>{
    navigate("/hotels",{state:{destination,date,options}});
  }

  return (
    <div className="header">
       <div className="headerContainer">
       <div className="headerList">
            <div className="headerListItem active">
            <FaBed  /><span>Stays</span>
            </div>
            <div className="headerListItem">
            <MdFlight /><span>Flights</span>
            </div>
            <div className="headerListItem">
            <MdCarRental /><span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <MdAttractions /><span>Attractions</span>
            </div>
            <div className="headerListItem">
            <IoCarSharp />
                <span>Airport Taxis</span>
            </div>



        </div>
        <div>
          <h1 className="headerTitle">A lifetime for discounts?Let's Begin.</h1>
          <p className="headerDesc">Harum ratione fugiat dolor beatae, unde quibusdam ad nisi qui. Fugit, nostrum libero!
          </p>
          <button className="headerBtn">SignIn/Register</button>
          </div>
          <div className="headerSearch">
          <div className="headerSearchItem">
          <MdPlace className="headerIcon" />
            <input
            type="text"
            placeHolder="Where are you going?"
            className="headerSearchInput"
            onChange={(e)=>setDestination(e.target.value)}></input>
          </div>
          <div className="headerSearchItem">
          <SlCalender className="headerIcon"/>
            <span 
            onClick={()=>setOpenDate(!openDate)}
            className="headerSearchText"
            >
              {`${format(date[0].startDate,"MM/dd/yy")} to ${format(date[0].endDate,"MM/dd/yy")}`}

            </span>
            {openDate && (
              <DateRange
              editableDateInputs={true}
              onChange={(item)=>setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}>

              </DateRange>

            )}
          </div>
          <div className='headerSearchItem'>
          <FaPerson className="headerIcon"/> 
          <span 
          onClick={()=>setOpenOptions(!openOptions)}
          className="headerSearchText">
            {`${options.adult}adult-${options.children}children-${options.room}room`}
          </span>
          {openOptions && (
            <div className="options">
            <div className="optionItem">
              <span className="optionText">Adult</span>
              <div className="optionCounter">
                <button
                disabled={options.adult<=1}
                className="optionCounterButton"
                onClick={()=>handleOption("adult","d")}>-</button>
                <span classsName="optionCounterNumber">{options.adult}</span>
                <button
                className="optionCounterButton"
                onClick={()=>handleOption("adult","i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
                <button
                disabled={options.children<=0}
                className="optionCounterButton"
                onClick={()=>handleOption("children","d")}>-</button>
                <span classsName="optionCounterNumber">{options.children}</span>
                <button
                className="optionCounterButton"
                onClick={()=>handleOption("children","i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
                <button
                disabled={options.room<=1}
                className="optionCounterButton"
                onClick={()=>handleOption("room","d")}>-</button>
                <span classsName="optionCounterNumber">{options.room}</span>
                <button
                className="optionCounterButton"
                onClick={()=>handleOption("room","i")}>+</button>
              </div>
            </div>
          </div>
         
        
          )}
           </div>
           <div className="headerSearchItem">
           <button className="headerBtn" onClick={handleSearch} >
                  Search
          </button></div>
          </div>  
          

            
        

       </div>

        
      
    </div>
  )
}

export default Header
