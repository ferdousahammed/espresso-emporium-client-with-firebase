import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import bgImage from "../assets/images/more/11.png";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  return (
    <div
      style={{ backgroundImage: `url('${bgImage}') ` }}
      className="py-12 lg:px-[15%] px-[4%] bg-cover"
    >
      <Link to={"/"}>
        <button
          style={{ textShadow: "0px 0px 4px #331A15" }}
          className="flex gap-4 lg:text-3xl text-2xl font-rancho items-center text-[#374151]"
        >
          <IoArrowBack /> Back to home
        </button>
      </Link>
      <div className="bg-[#F4F3F0] px-[8.48%] lg:py-20 py-10 my-12  rounded-md flex lg:flex-row flex-col gap-4 justify-around items-center">
        {/* <h3
          style={{ textShadow: "0px 0px 4px #331A15" }}
          className="font-rancho lg:text-4xl text-3xl text-center text-[#374151]"
        >
          {coffee.name}
        </h3> */}
        <div>
          <img className="" src={coffee["photo-URL"]} alt="" />
        </div>
        <div className="font-raleway lg:text-xl md:text-lg text-base space-y-3">
          <h3 className="lg:text-4xl text-2xl font-rancho">
            {" "}
            <span style={{ textShadow: "0px 0px 4px #331A15" }} className="">
              Niceties
            </span>
          </h3>
          <p>
            <span className="font-semibold">Name: </span> {coffee.name}
          </p>
          <p>
            <span className="font-semibold">Chef: </span> {coffee.chef}
          </p>
          <p>
            <span className="font-semibold">Supplier: </span> {coffee.supplier}
          </p>
          <p>
            <span className="font-semibold">Taste: </span> {coffee.taste}
          </p>
          <p>
            <span className="font-semibold">Category: </span> {coffee.category}
          </p>
          <p>
            <span className="font-semibold">Details: </span> {coffee.details}
          </p>
          <p>
            <span className="font-semibold">Price: </span> {coffee.price} Taka
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
