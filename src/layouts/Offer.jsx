import Container from "../components/Container";
import Flex from "../components/Flex";
import AddImage1 from "../assets/add1.png";
import AddImage2 from "../assets/add2.png";
import AddImage3 from "../assets/add3.png";

import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <Container>
      <Flex className={"mt-10 mb-5 gap-x-5"}>
        <div>
          <Link to="/shop">
            <img src={AddImage1} alt="add Image" className="w-full" />
          </Link>
        </div>
        <div className={"flex flex-col gap-y-8"}>
          <Link>
            <img src={AddImage2} alt="add image" className="w-ful" />
          </Link>
          <Link>
            <img src={AddImage3} alt="add image" className="w-full " />
          </Link>
        </div>
      </Flex>
    </Container>
  );
};

export default Offer;
