import {Navbar, Container, Nav} from 'react-bootstrap'
import CartXpress from '../CartXpress/CartXpress';

const NavBar = () => {
    return (  
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="Nav">
                <Nav.Link className="item" href="#home">Home</Nav.Link>
                <Nav.Link className="item" href="#features">Features</Nav.Link>
                <Nav.Link className="item" href="#pricing">Pricing</Nav.Link>
                <CartXpress />
              </Nav>
            </Container>
        </Navbar>
        </>
    );
}
 
export default NavBar;