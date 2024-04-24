import { IoArrowBack } from "react-icons/io5";
import { Link, ScrollRestoration } from "react-router-dom";
import bgImage from "../assets/images/more/11.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (coffee, event) => {
    event.preventDefault();
    fetch("http://localhost:5000/coffee/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire({
            imageUrl: coffee["photo-URL"],
            imageHeight: 150,
            title: `${coffee.name} is added.`,
          });
        }
      });
  };

  const coffeeInputFields = [
    {
      name: "Name",
      lName: "name",
      "col-span": "",
    },
    {
      name: "Chef",
      lName: "chef",
      "col-span": "",
    },
    {
      name: "Supplier",
      lName: "supplier",
      "col-span": "",
    },
    {
      name: "Taste",
      lName: "taste",
      "col-span": "",
    },
    {
      name: "Category",
      lName: "category",
      "col-span": "",
    },
    {
      name: "Details",
      lName: "details",
      "col-span": "",
    },
    {
      name: "Price",
      lName: "price",
      "col-span": "",
    },
    {
      name: "Photo URL",
      lName: "photo-URL",
      "col-span": "",
    },
  ];
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
      <div className="bg-[#F4F3F0] px-[8.48%] lg:py-20 py-10 my-12  rounded-md space-y-7">
        <h3
          style={{ textShadow: "0px 0px 4px #331A15" }}
          className="font-rancho lg:text-4xl text-3xl text-center text-[#374151]"
        >
          Add New Coffee
        </h3>
        <p className="font-raleway text-lg text-center mx-[6.788079470198675%]">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-raleway grid lg:grid-cols-2 grid-cols-1 gap-6">
            {coffeeInputFields.map((coffeeInputField, idx) => (
              <div
                className={`space-y-4 ${coffeeInputField["col-span"]}`}
                key={idx}
              >
                <label
                  htmlFor={`${coffeeInputField.lName}`}
                  className="text-xl font-semibold"
                >
                  {coffeeInputField.name}
                </label>
                <br />
                <input
                  className="w-full py-3 px-3 rounded-md hover:shadow-[0_0_10px] focus:shadow-[0_0_10px]  outline-0 border-4 border-transparent hover:border-[#E3B577] focus:border-[#E3B577]"
                  type="text"
                  name="name"
                  placeholder={`Enter coffee ${coffeeInputField.lName.replace(
                    "-",
                    " "
                  )}`}
                  {...register(`${coffeeInputField.lName}`)}
                />
              </div>
            ))}
            <input
              className="lg:col-span-2 bg-[#D2B48C] py-3 font-rancho text-2xl border-2 border-black rounded-md w-full cursor-pointer hover:bg-transparent"
              type="submit"
              value={"Add Coffee"}
            />
          </div>
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AddCoffee;
