import "./App.css";
import Featuredproducts from "./components/FeaturedProducts/Featuredproducts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import imageOne from "./components/Images/imgOne.jpg";

function App() {
  return (
    <div className="">
      <Header />
      <div className="w-full flex justify-between items-center mt-11 px-4 sm:px-8 md:px-12">
        <div>
          <div className="w-themeWidth h-72">
            <p className="font-Sora font-bold text-themeFontS not-italic">
              Photon theme for Shopify
            </p>
          </div>

          <div className="h-14 w-textWidth">
            <p className="font-Sora font-normal text-textFontS">
              ...Equivalently, is inversely proportional to the wavelength. The
              higher the photon's frequency, the higher its energy
            </p>
          </div>
        </div>
        <ul className="w-28 h-40">
          <li className="not-italic font-normal text-listFontS">Facebook</li>
          <li className="not-italic font-normal text-listFontS">Instagram</li>
          <li className="not-italic font-normal text-listFontS">Twitter</li>
          <li className="not-italic font-normal text-listFontS">Youtube</li>
        </ul>
      </div>
      <div className="mt-14 flex justify-between items-center px-4 sm:px-8 md:px-12">
        <div>
          <p>
            <small className="font-Sora text-base">category</small>
          </p>
          <p className="h-12 w-56 font-bold not-italic text-CurologyFontSizeNdLineHeight">
            Curology brand face cream for men
          </p>
          <br />
          <p className="w-28 h-7 font-Sora text-priceFontSize">$19.97</p>
          <br />
          <button className="w-28 h-8 font-Sora font-bold text-xs bg-backgroundCol bg-opacity-100 ">
            Button Primary
          </button>
          <br />

          <small className="font-Josefin flex  justify-center  items-center not-italic font-normal h-12 w-28 text-nextPriceFontS">
            Next product
          </small>
        </div>
        <div>
          <img
            className="h-imageOneHeight w-imageOneWidth"
            src={imageOne}
            alt="ImageOne"
          />
        </div>
      </div>
      <Featuredproducts />
      <Footer />
    </div>
  );
}

export default App;
