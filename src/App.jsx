import "./App.css";
import NavbarComponents from "./components/Navbar";
import FooterComponent from "./components/Footer";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <NavbarComponents />
      <HomePage />
      <FooterComponent />
    </>
  );
}

export default App;
