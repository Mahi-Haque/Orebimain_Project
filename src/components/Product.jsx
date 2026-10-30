import Badge from "./Badge";
import Image from "./Image";
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ productImg, productBadge, productName, productPrice }) => {
  return (
    <div className={"relative group mb-10 mt-15"}>
      <Image imgSrc={productImg} />
      <Badge className={"absolute top-4 left-4"} badgeName={productBadge} />
      <div className="flex justify-between mt-3">
        <h3>{productName}</h3>
        <h4>{productPrice}</h4>
      </div>
      <div className="w-full bg-white p-5 absolute bottom-5 left-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
        <div className="flex justify-end items-center gap-x-2 mt-1">
          Add to Wish List <FaHeart />
        </div>
        <div className="flex justify-end items-center gap-x-2 mt-1">
          Compare <FaArrowsRotate />
        </div>
        <div className="flex justify-end items-center gap-x-2 mt-1">
          Add to cart <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Product;
