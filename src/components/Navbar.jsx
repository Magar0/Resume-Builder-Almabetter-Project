import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, Outlet } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="light" variant="light" className="border-bottom" sticky="top">

                <Navbar.Brand>
                    <Link to="/" className="text-decoration-none text-black">
                        <img src="/images/Logo2.png" alt="Logo" className="logo-image" height="40" width="210" />
                    </Link>
                </Navbar.Brand>

                <Nav className="me-auto ">
                    <NavLink to="/" className="mx-2 text-decoration-none text-black">Home</NavLink>
                    <NavLink to="/details" className="mx-2 text-decoration-none text-black">Details</NavLink>
                    <NavLink to="/about" className="mx-2 text-decoration-none text-black">About US</NavLink>
                </Nav>

            </Navbar>
            <Outlet />
        </>
    )
}

export default NavbarComponent;