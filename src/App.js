import "./App.css";
import Header from "./components/Header/Header";
import imageOne from "./components/Images/imgOne.jpg";

function App() {
  return (
    <div className="px-4 sm:px-8 md:px-12">
      <Header />
      <div className="w-full flex justify-between items-center">
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
      <div className="mt-14 flex justify-between items-center">
        <div>
          <p>
            <small className="font-Sora">category</small>
          </p>
          <p className="h-12 w-56 font-bold not-italic text-CurologyFontSizeNdLineHeight">
            Curology brand face cream for men
          </p>
          <br />
          <p className="w-28 h-7 font-Sora text-priceFontSize">$19.97</p>
          <br />
          <button className="w-28 h-px font-Sora font-bold text-xs bg-backgroundCol bg-opacity-100 ">
            Button Primary
          </button>
          <br />
          <br />
          <small className="font-Josefin not-italic font-normal h-28 w-6 text-listFontS">
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
    </div>
  );
}

export default App;
