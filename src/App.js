import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'react-router-dom';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';
import Navigation from './components/Navigation/navigation';
import Service from './components/Services/services';
import Footer from './components/Footer/footer';
import Index from './components/Home/index';


function App() {

let element = useRoutes([
  {path: "/", element:<Index/>},
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
<Navigation/>
{element}
</header>


{/* Main Content */}
<body className="App-body">

</body>




{/* Footer Content */}     
<footer className="App-footer">
<Footer/>
</footer>
</React.Fragment>     

);
}

export default App;
