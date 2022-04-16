import {Navbar, Container, Nav} from 'react-bootstrap'
import CartXpress from '../CartXpress/CartXpress';

const NavBar = () => {
    return (  
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <CartXpress />
              </Nav>
            </Container>
        </Navbar>
        </>
    );
}
 
export default NavBar;
