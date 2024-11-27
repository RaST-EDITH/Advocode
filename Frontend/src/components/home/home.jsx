import ActionButton from "./components/ActionButton";
import Carousel from "./components/Carousel";
import KnowYourRights from "./components/KnowYourRights";
import SearchBox from "./components/Search";

const Home = () => {
  return (
    <>
      <section id="home" className="z-[-10] relative bg-[#F4F4F4] w-full">
        <div className="z-[-1] absolute top-[-100px] sm:top-[-50px] bg-gradient-to-b from-cyan-300 to-blue-400 rounded-[84px] w-full h-96"></div>
        <div
          className="pt-10 px-6 flex flex-col items-center justify-center w-full"
          id="action-bar"
        >
          <p className="text-white sm:text-3xl text-xl font-medium text-center mb-7">
            NyayVedika
          </p>
          <SearchBox />
          <ActionButton />
        </div>
        <Carousel />
        <KnowYourRights />
      </section>
    </>
  );
};

export default Home;
