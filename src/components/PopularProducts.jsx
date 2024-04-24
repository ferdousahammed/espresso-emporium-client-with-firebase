import { Link, useLoaderData } from "react-router-dom";
import bgImage from "../assets/images/more/1.png";
import { CgCoffee } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";
const PopularProducts = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}/delete`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffees.filter((coffee) => coffee._id != id);
              setCoffees(remaining);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <section>
      <div
        style={{ backgroundImage: `url("${bgImage}")` }}
        className={`w-full bg-cover bg-no-repeat`}
      >
        <p className="font-raleway text-xl text-center">--- Sip & Savor ---</p>
        <h3
          style={{ textShadow: "0px 0px 4px #331A15" }}
          className="font-rancho text-[#331A15] lg:text-6xl md:text-4xl text-3xl text-center my-6"
        >
          Our Popular Products
        </h3>
        <Link to={"/coffee/add"} className="flex justify-center lg:mb-14 mb-8">
          <button
            style={{ textShadow: "0px 0px 6px #331A15" }}
            className="border-2 border-black rounded-sm bg-[#E3B577] px-5 py-2 font-rancho text-2xl text-white flex gap-2 items-center"
          >
            Add Coffee{" "}
            <span className="text-black">
              <CgCoffee />
            </span>
          </button>
        </Link>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 w-[80%] mx-auto">
          {coffees.map((coffee) => (
            <div
              key={coffee._id}
              className="bg-[#ECEAE3] bg-opacity-40 lg:p-12 p-4 rounded-lg flex xl:flex-row flex-col w-full items-center"
            >
              <div className="">
                <img className="" src={coffee["photo-URL"]} alt="" />
              </div>
              <div className="flex lg:flex-row flex-col items-center gap-3 justify-between w-full">
                <div className="font-raleway lg:text-xl md:text-lg text-base space-y-3">
                  <p>
                    <span className="font-semibold">Name: </span> {coffee.name}
                  </p>
                  <p>
                    <span className="font-semibold">Chef: </span> {coffee.chef}
                  </p>
                  <p>
                    <span className="font-semibold">Price: </span>{" "}
                    {coffee.price} Taka
                  </p>
                </div>
                <div className="gap-3 flex lg:flex-col flex-row">
                  <Link
                    to={`/coffee/${coffee._id}`}
                    className="p-3 bg-[#D2B48C] text-white rounded-lg w-10 h-10"
                  >
                    <IoEyeSharp />
                  </Link>
                  <Link
                    to={`/coffee/${coffee._id}/update`}
                    className="p-3 bg-[#3C393B] text-white rounded-lg w-10 h-10"
                  >
                    <FaPenFancy />
                  </Link>
                  <button
                    onClick={() => handleDelete(coffee._id)}
                    className="p-3 bg-[#EA4744] text-white rounded-lg w-10 h-10"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
