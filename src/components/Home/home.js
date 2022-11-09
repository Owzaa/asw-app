import React from 'react';
import ServiceTabs from '../Card-Images/cardTabs';
import CarouselExample from '../Carousel/Slider';

function HomeView() {

return (
<>
<div className='container-flex' >
<CarouselExample/>
</div>

<div className='container-text'>
    <h1 className='text-muted p-3 text-uppercase'>
    <b>Who are we ?</b>
    </h1>
</div>

<section className='content' id="mottoTextContainer">

<div className='container' id='mottoText'>
    <h3 className='text-center bg-content-gray text-black-50'>
    <i>" We provide a complete turnkey solution when working on structural
    steel projects taking care of everything from the design of all 
    structural components, detailing and production of fabrication and
    erection drawings, to the final fabrication and erection. " 
    </i>
    </h3>
</div>
<hr/>
</section>


<section className='content mt-0' id="serviceTabs">
<div className='container'>
    <ServiceTabs/>
</div>
</section>
</>
)
}

export default HomeView
