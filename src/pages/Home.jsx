import AddBanner from "../layouts/AddBanner";
import Banner from "../layouts/Banner";
import BestSeller from "../layouts/BestSeller";
import NewArrival from "../layouts/NewArrival";
import Offer from "../layouts/Offer";
import Shipping from "../layouts/Shipping";
import SpecialOffer from "../layouts/SpecialOffer";

const Home = () => {
  return (
    <>
      <Banner />
      <Shipping />
      <Offer />
      <NewArrival />
      <BestSeller />
      <AddBanner />
      <SpecialOffer />
    </>
  );
};
export default Home;
