import { useRoutes } from 'react-router-dom';
import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';
import Navigation from './components/Navigation/navigation';
import Service from './components/Services/services';
import Footer from './components/Footer/footer';
import Home from './components/Home/home'


function App() {


let element = useRoutes ([

{ path: "/", element:<Home/>},
{ path: "/about", element: <About/> },
{ path: "/contact", element: <Contact/> },
{ path: "/portfolio", element: <Portfolio/> },
{ path: "/service", element: <Service/> },
{ path: "/footer", element: <Footer/> },

])


return (

<React.Fragment>    
   
{/* Navigation Bar  */}

<header className="header"> 
<Navigation  className="container-wrap"/>
{element}
</header>



{/* Main Content */}
{/* <div className="container">
<Home/>
</div>
*/}

{/* Footer Content */}     
<footer className="App-footer">
<Footer/>
</footer>

</React.Fragment>     


);
}

export default App;
