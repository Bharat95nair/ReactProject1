import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/1558a721300c7f6d.jpg?q=60" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/ff79341b24d091cd.jpg?q=60" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}


