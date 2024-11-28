import news from "../../../assets/images/news.svg";
import documents from "../../../assets/images/documents.svg";
import consultation from "../../../assets/images/consultation.svg";

const ActionButton = () => {
  return (
    <>
      <section className="flex bg-white rounded-lg mt-10 p-5 py-8 shadow-2xl shadow-sky-200 w-full max-w-2xl">
        <div className="flex flex-col flex-1 justify-center item-center p-2 gap-2">
          <img src={documents} alt="" className="w-16 mx-auto" />
          <p className="text-center text-sm font-poppins">
            Legal
            <br /> Documents
          </p>
        </div>
        <div className="flex flex-col flex-1 justify-center item-center p-2 gap-2">
          <img src={news} alt="" className="w-16 mx-auto" />
          <p className="text-center text-sm font-poppins">
            Legal
            <br />
            News
          </p>
        </div>
        <div className="flex flex-col flex-1 justify-center item-center p-2 gap-2">
          <img src={consultation} alt="" className="w-16 mx-auto" />
          <p className="text-center text-sm font-poppins">
            Legal
            <br /> Consultation
          </p>
        </div>
      </section>
    </>
  );
};

export default ActionButton;
