import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { TextQuote, Search, ShoppingCart } from "lucide-react";
import User from "../assets/icons/User";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <div className={"py-8 border-b border-[#979797]"}>
        <Container>
          <Flex>
            <div className="w-[40%]">
              <Link to={"/"}>
                <Image imgSrc={logo} imgAlt={"logo"} />
              </Link>
            </div>
            <div className="w-[60%]">
              <ul className="flex items-center gap-x-10 font-dm text-[14px] text-[#767676]">
                <li>
                  <Link to={"/"} className={"hover:text-[#262626] font-bold"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/shop"}
                    className={"hover:text-[#262626] font-bold"}
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className={"hover:text-[#262626] font-bold"}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact"}
                    className={"hover:text-[#262626] font-bold"}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>
      <div className="bg-[#F5F5F3] py-5 border-b-2 border-[#767676]">
        <Container>
          <Flex>
            <div className="flex items-center gap-x-2 w-1/4">
              <TextQuote onClick={handleShow} />
              <div
                className={
                  "text-[#262626] text-[14px] font-dm relative active:block"
                }
              >
                Shop by Category
                {show && (
                  <div className="bg-[#262626] w-75 p-5 absolute top-8 -left-8 ">
                    <ul>
                      <Link to="/shop">
                        <li className="py-3 border-b-2 border-[#767676] text-[#979797] font-dm text-[14px] hover:text-[#F5F5F5] duration-300">
                          Accesories
                        </li>
                      </Link>
                      <Link to="/shop">
                        <li className="py-3 border-b-2 border-[#767676] text-[#979797] font-dm text-[14px] hover:text-[#F5F5F5] duration-300">
                          Furniture
                        </li>
                      </Link>
                      <Link to="/shop">
                        <li className="py-3 border-b border-[#767676] text-[#979797] font-dm text-[14px] hover:text-[#F5F5F5] duration-300">
                          Electronics
                        </li>
                      </Link>
                      <Link to="/shop">
                        <li className="py-3 border-b-2 border-[#767676] text-[#979797] font-dm text-[14px] hover:text-[#F5F5F5] duration-300">
                          Clothes
                        </li>
                      </Link>
                      <Link to="/shop">
                        <li className="py-3 border-b-2 border-[#767676] text-[#979797] font-dm text-[14px] hover:text-[#F5F5F5] duration-300">
                          Bags
                        </li>
                      </Link>
                      <Link to="/shop">
                        <li className="py-3 border-b-2 border-[#767676] text-[#979797] font-dm text-[14px] hover:text-[#F5F5F5] duration-300">
                          Home appliances
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 relative">
              <input
                type="text"
                className="p-5  w-full bg-white"
                placeholder="Search Products"
              />
              <Search className="absolute top-5 right-5" />
            </div>
            <div className="w-1/4 flex items-center justify-end gap-x-5">
              <User />
              <ShoppingCart />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
