import React from 'react'
import Carousel from 'react-bootstrap/Carousel';





function carouselSlide() {
       
  return (

<Carousel variant="dark">

  <Carousel.Item>
    <img
    className="d-block w-100"
    src="../images/carousel/C1.png"
    alt="First slide"
    />
    <Carousel.Caption>
    <h5>First slide label</h5>
    <p>

    </p>
    </Carousel.Caption>   
  </Carousel.Item>

  <Carousel.Item>
    <img
    className="d-block w-100"
    src="../images/"
    alt="Second slide"
    />    
    <Carousel.Caption>
    <h5>Second slide label</h5>
    <p> 
    </p>
    </Carousel.Caption>
  </Carousel.Item>
    

  <Carousel.Item>
    <img className="d-block w-100"
    src="../images/"
    alt="Third slide"/>    
    <Carousel.Caption>
    <h5>Third slide label</h5>
  
    <p>         
    </p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

 )
}

export default carouselSlide
