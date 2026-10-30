import { Link } from "react-router-dom";
import Image from "../components/Image";
import bannerAdd from "../assets/addBanner.png";
import Container from "../components/Container";
const AddBanner = () => {
  return (
    <>
      <Container className={"mb-15"}>
        <Link to="/shop">
          <Image imgSrc={bannerAdd} />
        </Link>
      </Container>
    </>
  );
};

export default AddBanner;
