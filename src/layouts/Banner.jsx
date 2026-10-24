import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Link to="/shop">
        <div
          className={
            "bg-[url('/Banner.png')] bg-cover bg-center bg-no-repeat py-80"
          }
        ></div>
      </Link>
    </>
  );
};

export default Banner;
