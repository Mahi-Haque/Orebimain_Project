import Container from "../components/Container";
import Flex from "../components/Flex";
import Product from "../components/Product";
import productNine from "../assets/product9.png";
import productTen from "../assets/product10.png";
import productEleven from "../assets/product11.png";
import productTwelve from "../assets/product12.png";
const SpecialOffer = () => {
  return (
    <>
      <Container>
        <h1 className="text-[#262626] text-[30px] font-dm font-bold">
          Special Offers
        </h1>
        <Flex className={"gap-x-10 mb-30"}>
          <div className="w-1/4">
            <Product
              productImg={productNine}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={productTen}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={productEleven}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={productTwelve}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default SpecialOffer;
