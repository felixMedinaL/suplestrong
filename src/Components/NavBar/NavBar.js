import {Navbar, Container, Nav} from 'react-bootstrap'
import CartXpress from '../CartXpress/CartXpress';
import { useState, useEffect } from 'react';
import { getCategories } from '../../asyncmock';
import { NavLink } from 'react-bootstrap';

const NavBar = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then(categories => {
        setCategories(categories)
      })
    }, [])
    return (  
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink>)}
              <Nav className="Nav">
                <Nav.Link className="item" href="#home">Home</Nav.Link>
                <Nav.Link className="item" href="#Nosotros">Features</Nav.Link>
                <CartXpress />
              </Nav>
            </Container>
        </Navbar>
        </>
    );
}
 
export default NavBar;
