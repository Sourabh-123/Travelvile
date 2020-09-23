import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
  <div className="row gy-5">
          <div className="col-md-4 col-10 mx-auto" > 


<div className="cards">
<div className="card">

  <img className="card_img" src={props.imgsrc} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href={props.link} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
</div>
    )
}
export default Card;