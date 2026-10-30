import Container from "../components/Container";
import Product from "../components/Product";
import productOne from "../assets/product1.png";
import productTwo from "../assets/product2.png";
import productThree from "../assets/product3.png";
import productFour from "../assets/product4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const NewArrival = () => {
  return (
    <>
      <Container>
        <h1 className="text-[#262626] font-dm font-bold text-[30px] mb-5">
          New Arrivals
        </h1>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <Product
                productImg={productOne}
                productBadge={"Trendy"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product
                productImg={productTwo}
                productBadge={"Hot"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product
                productImg={productThree}
                productBadge={"Top"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product
                productImg={productFour}
                productBadge={"New"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product
                productImg={productFour}
                productBadge={"New"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product
                productImg={productThree}
                productBadge={"Top"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Product
                productImg={productTwo}
                productBadge={"Hot"}
                productName={"Basic Crew Neck Tee"}
                productPrice={"$44.00"}
              />
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </Container>
    </>
  );
};

export default NewArrival;
