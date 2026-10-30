import Container from "../components/Container";
import Flex from "../components/Flex";
import { IoGridSharp } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import Product from "../components/Product";
import productOne from "../assets/product1.png";
import productTwo from "../assets/product2.png";
import productThree from "../assets/product3.png";
import productFour from "../assets/product4.png";
import productFive from "../assets/product5.png";
import productSix from "../assets/product6.png";
import productSeven from "../assets/product7.png";
import productEight from "../assets/product8.png";
import productNine from "../assets/product9.png";
import productTen from "../assets/product10.png";
import productEleven from "../assets/newpro.png";
import productTwelve from "../assets/newpro2.png";

const ShopPart = () => {
  return (
    <div className={"py-15"}>
      <Container>
        <h1 className="text-[50px] font-bold font-dm">Products</h1>
        <h5 className="text-[#767676] text-[12px] font-dm">
          Home &gt; Products
        </h5>
        <Flex className={"mt-10 items-start gap-x-10"}>
          <div className="w-25% flex flex-col gap-y-15px">
            <div className="flex flex-col gap-y-7.5 mb-10">
              <h3 className="text-[20px] font-dm font-bold">
                Shop by Category
              </h3>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 1</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 2</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 3</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 4</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 5</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-7.5 mb-10">
              <h3 className="text-[20px] font-dm font-bold">
                Shop by Category
              </h3>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 1</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 2</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 3</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 4</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 5</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-7.5 mb-10">
              <h3 className="text-[20px] font-dm font-bold">
                Shop by Category
              </h3>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 1</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 2</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 3</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 4</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 5</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-7.5">
              <h3 className="text-[20px] font-dm font-bold">
                Shop by Category
              </h3>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 1</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 2</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 3</span>
                &#10010;
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 4</span>
              </div>
              <div className="flex items-center gap-x-50 py-3 border-b border-gray-400 text-[16px] text-gray-600">
                <span>Category 5</span>
              </div>
            </div>
          </div>

          <div className="w-3/4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-x-3 text-[24px] cursor-pointer">
                <IoGridSharp />
                <IoGridOutline />
              </div>

              <div className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-3">
                  <span className="text-sm text-[#767676]">Sort by:</span>
                  <input
                    type="text"
                    placeholder="Featured"
                    className="border border-gray-400 px-3 py-1 outline-none w-[150px]"
                  />
                </div>

                <div className="flex items-center gap-x-3">
                  <span className="text-sm text-[#767676]">Show:</span>
                  <input
                    type="text"
                    placeholder="36"
                    className="border border-gray-400 px-3 py-1 outline-none w-[80px]"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <Product
                  productImg={productOne}
                  productName={"Table Watch"}
                  productPrice={"$45.66"}
                  productBadge={"Trendy"}
                />
              </div>
              <div>
                <Product
                  productImg={productTwo}
                  productName={"Watch"}
                  productPrice={"$15.0"}
                  productBadge={"Hot"}
                />
              </div>
              <div>
                <Product
                  productImg={productThree}
                  productName={"Bucket"}
                  productPrice={"$62.00"}
                  productBadge={"Pre-Order"}
                />
              </div>
              <div>
                <Product
                  productImg={productFour}
                  productName={"Fluffy Dol"}
                  productPrice={"$150.00"}
                  productBadge={"Hot"}
                />
              </div>
              <div>
                <Product
                  productImg={productFive}
                  productName={"Premium Jar"}
                  productPrice={"$563.52"}
                  productBadge={"Limited"}
                />
              </div>
              <div>
                <Product
                  productImg={productSix}
                  productName={"Fashion Bag"}
                  productPrice={"$456.25"}
                  productBadge={"Soon"}
                />
              </div>
              <div>
                <Product
                  productImg={productSeven}
                  productName={"Hand Made Spice Grinder"}
                  productPrice={"$1100.25"}
                  productBadge={"Very Rare"}
                />
              </div>
              <div>
                <Product
                  productImg={productEight}
                  productName={"BagPack For Adults"}
                  productPrice={"155.55"}
                  productBadge={"Not Available"}
                />
              </div>
              <div>
                <Product
                  productImg={productNine}
                  productName={"Luxury Sun Glasses"}
                  productPrice={"$1800.00"}
                  productBadge={"Limited"}
                />
              </div>
              <div>
                <Product
                  productImg={productTen}
                  productName={"Gaming Header"}
                  productPrice={"$560.00"}
                  productBadge={"Available"}
                />
              </div>
              <div>
                <Product
                  productImg={productEleven}
                  productName={"Wall Watch"}
                  productPrice={"$152.00"}
                  productBadge={"Available"}
                />
              </div>
              <div>
                <Product
                  productImg={productTwelve}
                  productName={"Unique DustBin"}
                  productPrice={"$52.00"}
                  productBadge={"Available"}
                />
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default ShopPart;
