import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Property from "./Property";

function NavBarComponent() {
   return(
     <Router>
       <div className="NavBar">
   <Navbar bg="dark" variant={"dark"} expand="lg">
     <Container fluid>
       <Navbar.Brand href="#"><h1>Rental_Homez</h1></Navbar.Brand>
       <Navbar.Toggle aria-controls="navbarScroll" />
       <Navbar.Collapse id="navbarScroll">
         <Nav
           className="me-auto my-2 my-lg-0"
           style={{ maxHeight: '100px' }}
           navbarScroll
         >
          <ul>
            <li>
           <Nav.Link as={Link} to= {"/home"}>Home</Nav.Link>
           </li>
            <li>
           <Nav.Link as={Link} to= {"/about"}>About</Nav.Link>
           </li>
            <li>
           <Nav.Link as={Link} to= {"/property"}>Property</Nav.Link>
          </li>
            <li>
           <Nav.Link as={Link} to= {"/contact"}>Contact</Nav.Link>
           </li>
           
          </ul>
         
         </Nav>
       
       </Navbar.Collapse>
     </Container>
   </Navbar>
   </div>
   <div>
       <Routes>
         <Route path="/home" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/property" element={<Property />} />
         <Route path="/contact" element={<Contact />} />
         </Routes>
   </div>

   </Router>
   )
}
export default NavBarComponent;





