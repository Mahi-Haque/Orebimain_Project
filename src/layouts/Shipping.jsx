import Container from "../components/Container";
import Flex from "../components/Flex";
import { PiNumberTwo } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Shipping = () => {
  return (
    <div class={"py-5 border-b border-[#F0F0F0]"}>
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center">
            <PiNumberTwo className="text-[24px] font-bold" />
            <span className="text-[#6D6D6D] text-[16px] font-dm">
              Two years warranty
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <FaTruck className="text-[24px] font-bold" />
            <span className="text-[#6D6D6D] text-[16px] font-dm">
              Free shipping
            </span>
          </div>
          <div className="flex items-center gap-x-2">
            <FaArrowRotateLeft className="text-[24px] font-bold" />
            <span className="text-[#6D6D6D] text-[16px] font-dm">
              Return policy in 30 days
            </span>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shipping;
