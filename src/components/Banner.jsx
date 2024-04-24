import banner from "../assets/images/more/6.jpeg";
import AwesomeAroma from "../assets/images/icons/1.png";
import HighQuality from "../assets/images/icons/2.png";
import PureGrades from "../assets/images/icons/3.png";
import ProperRoasting from "../assets/images/icons/4.png";
const Banner = () => {
  const bannerInfo = [
    {
      image: AwesomeAroma,
      title: "Awesome Aroma",
      text: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      image: HighQuality,
      title: "High Quality",
      text: "We served the coffee to you maintaining the best quality",
    },
    {
      image: PureGrades,
      title: "Pure Grades",
      text: "The coffee is made of the green coffee beans which you will love",
    },
    {
      image: ProperRoasting,
      title: "Proper Roasting",
      text: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <section>
      <div
        style={{ backgroundImage: `url("${banner}")` }}
        className={`w-full bg-cover bg-no-repeat bg-center transform -scale-x-100`}
      >
        <div className="flex items-center w-full h-full py-[15%] lg:pl-[10%] pl-[5%] pr-[5%]">
          <div className="transform -scale-x-100 text-white max-w-3xl space-y-4">
            <h3 className="font-rancho lg:text-5xl md:text-3xl text-2xl">
              Would you like a Cup of Delicious Coffee?
            </h3>
            <p className="font-raleway">
              It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
              the nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <div>
              <button className="bg-[#E3B577] px-4 py-2 text-black font-rancho lg:text-2xl text-xl mt-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3] px-[15%] py-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {bannerInfo.map((info, idx) => (
          <div className="space-y-4 text-center lg:text-left" key={idx}>
            <div className="flex lg:block justify-center">
              <img src={info.image} alt="" />
            </div>
            <p className="font-rancho text-4xl text-[#331A15]">{info.title}</p>
            <p className="font-raleway">{info.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
