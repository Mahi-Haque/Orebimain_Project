import Container from "../components/Container";
import Flex from "../components/Flex";
import Product from "../components/Product";
import productFive from "../assets/product5.png";
import productSix from "../assets/product6.png";
import productSeven from "../assets/product7.png";
import productEight from "../assets/product8.png";
const BestSeller = () => {
  return (
    <>
      <Container>
        <h1 className="text-[#262626] text-[30px] font-dm font-bold mb-5">
          Our Bestsellers
        </h1>

        <Flex className={"gap-x-10 mb-15"}>
          <div className="w-1/4">
            <Product
              productImg={productFive}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={productSix}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={productSeven}
              productBadge={"New"}
              productName={"Basic Crew Neck Tee"}
              productPrice={"$44.00"}
            />
          </div>
          <div className="w-1/4">
            <Product
              productImg={productEight}
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

export default BestSeller;
