import { Routes, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomePage from "../pages/home";
import PortofolioPage from "../pages/porto";
import BlogPage from "../pages/blog";
import AboutPage from "../pages/about";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponents = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Link className="link-nav" to="/home">
              Home
            </Link>

            <Link className="link-nav" to="/about">
              About
            </Link>

            <Link className="link-nav" to="/porto">
              Porto
            </Link>

            <Link className="link-nav" to="/blog">
              Blog
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/porto" element={<PortofolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default NavbarComponents;
