import React from 'react'
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import "./Hotel.css";
import hotel from '../../assets/hotel2.jpeg';



const Hotel = () => {
  const photos=[
    {
      src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/526620608.jpg?k=092cf194635fc60203fde98fc441443a8b4f94f011b1c1480e48e2e7f302e4a7&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ]
  return (
    <div className="hotel">
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <div className="hotelTitle">The Grand Hotel</div>
          <div className="hotelAddress">
            Location Icon
            <span>Elton St 125 New York</span>

          </div>
          <span className="hotelDistance">
            Excellent location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114b at this property and get a free airpot Taxi

          </span>
          <div className="hotelImages">
           (
            photos.map((photo)=>)
           )
            

          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
            <div className="hotelTitle">
              <h1>Stay in the heart of city</h1>
            <p className="hotelDesc">
            Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
            </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span> Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!</span>
                <h2> <b>$945</b> (9 nights)</h2>
                <button>Reserve or Book Now!</button>
            </div>

            </div>
            

          </div>
          
        </div>


      </div>
      <MailList></MailList>
          <Footer></Footer>
        

      
    </div>
  )
}

export default Hotel
