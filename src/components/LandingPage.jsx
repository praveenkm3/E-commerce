import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductNavbar from "./ProductNavbar";
import Home from "./Home";
function LandingPage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="mt-17 fixed z-50 top-0 right-0 w-full">
        <ProductNavbar />
      </div>
      <div>
        <h1>p</h1>
        <Home />
        <Footer />
      </div>
    </>
  );
}
export default LandingPage;
