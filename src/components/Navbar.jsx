import logo from "../assets/images/more/logo1.png";
const Navbar = () => {
  return (
    <nav className="flex flex-row justify-center items-center gap-3 py-3 bg-[#3a2a2a]">
      <img className="lg:max-w-20 max-w-14" src={logo} alt="" />
      <p className="font-rancho text-white lg:text-6xl md:text-4xl text-3xl">
        Espresso Emporium
      </p>
    </nav>
  );
};

export default Navbar;
