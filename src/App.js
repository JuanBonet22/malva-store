import Home from "./Screens/Home";
import Services from "./Screens/Services";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import BotonFlotante from "./Components/BotonFlotante";
import ProductSlider from "./Components/ProductSlider";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <ProductSlider />
      <Footer />
      <BotonFlotante />
    </div>

    
  );
}

export default App;
