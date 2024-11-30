import criminallaws from "../../../assets/images/criminallaws.svg";
import familylaws from "../../../assets/images/familylaws.svg";
import propertylaws from "../../../assets/images/propertylaws.svg";
import labourlaws from "../../../assets/images/labourlaws.svg";

const KnowYourRights = () => {
  return (
    <section id="kyr" className="mt-6 sm:mt-10 px-6 pb-16 w-full">
      <p className="font-poppins mb-3 text-[#808080] sm:text-xl sm:text-center">
        Know Your Rights...
      </p>
      <div className="flex flex-wrap w-full gap-3 justify-center">
        <div className="w-full max-w-lg rounded-lg bg-white flex justify-between p-2 px-3 font-medium font-poppins items-center">
          <p>Labour Laws</p>
          <img src={labourlaws} alt="" />
        </div>
        <div className="w-full max-w-lg  rounded-lg bg-white flex justify-between p-2 px-3 font-medium font-poppins items-center">
          <p>Property Laws</p>
          <img src={propertylaws} alt="" />
        </div>
        <div className="w-full max-w-lg rounded-lg bg-white flex justify-between p-2 px-3 font-medium font-poppins items-center">
          <p>Family Laws</p>
          <img src={familylaws} alt="" />
        </div>
        <div className="w-full max-w-lg  rounded-lg bg-white flex justify-between p-2 px-3 font-medium font-poppins items-center">
          <p>Criminal Laws</p>
          <img src={criminallaws} alt="" />
        </div>
      </div>
    </section>
  );
};

export default KnowYourRights;
