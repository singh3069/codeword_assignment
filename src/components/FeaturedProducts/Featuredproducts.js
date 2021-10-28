import React from "react";
import ProductphotoOne from "../../resources/productImages/productPhoto1.png";
// import A from '../../resources/productImages/productPhoto1.png';
import ProductphotoTwo from "../../resources/productImages/productPhoto2.png";
import ProductphotoThree from "../../resources/productImages/productPhoto3.png";

function Featuredproducts() {
  const products = [
    {
      img: ProductphotoOne,
      tittleOne: "Awesome product title",
      tittleTwo: "with two lines",
    },
    {
      img: ProductphotoTwo,
      tittleOne: "Awesome product title",
      tittleTwo: "with two lines",
    },
    {
      img: ProductphotoThree,
      tittleOne: "Awesome product title",
      tittleTwo: "with two lines",
    },
  ];
  return (
    <div className="w-full mb-24 mt-7">
      <div className="flex justify-between items-center">
        <p className="font-bold text-featuredFontSize font-Sora">
          Featured Products
        </p>
        <button className="w-28 h-8 font-Sora font-bold text-xs bg-backgroundCol bg-opacity-100">
          Button Primary
        </button>
      </div>
      <div className="flex gap-40 mt-6">
        {products.map((items, i) => {
          return (
            <div className="flex flex-col items-center" key={i}>
              <img src={items.img} alt="productImages" />
              <div>
                <span className="material-icons text-checked">star</span>
                <span className="material-icons text-checked ">star</span>
                <span className="material-icons text-checked ">star</span>
                <span className="material-icons text-checked ">star</span>
                <span className="material-icons text-unChecked">star</span>
              </div>
              <p className="font-bold font-Sora text-sm text-center mt-2 mb-4">
                {items.tittleOne}
                <br />
                {items.tittleTwo}
              </p>
              <button className="w-full border-2 border-black font-Sora font-bold text-xs box-border h-10 ">
                View Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Featuredproducts;
