import React from 'react'
import home from "./Home.css"
import Card from "./Card"


export default function Home() {
    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="2.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="2.jpg" alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="3.jpg" alt="Third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div>
    <h2 class="About">About Us</h2>
    <p class="share">We love travel</p>
    <p class="w3-justify">Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.[2] The World Tourism Organization defines tourism more generally, in terms which go "beyond the common perception of tourism as being limited to holiday activity only", as people "traveling to and staying in places outside
     their usual environment for not more than one consecutive year for leisure and not less than 24 hours, business and other purposes"</p>
   
  




  </div>
  <div className="div_card">
    <div className="under_card">
      <Card imgsrc="1.jpg"/>
  </div>

  <div className="under_card">
     <Card imgsrc="2.jpg"/>
  </div>   
   <div className="under_card">

   <Card imgsrc="3.jpg"/>
   </div>
   </div>
      </>
    )
}
