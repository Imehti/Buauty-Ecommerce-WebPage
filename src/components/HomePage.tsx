import Navbar from "./Navbar";
import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <div className="flex bg-[url('src/assets/home-bg.webp')] bg-no-repeat h-full sm:bg-cover bg-center relative overflow-hidden ">
      <Navbar />
      <div className="absolute sm:top-[34%] sm:left-[3%] left-10">
        <h2 className="hidden sm:block italic sm:text-4xl text-3xl w-1/2 sm:w-full font-mono font-bold text-left text-pink-700">
          Be Kind To Your Beauty
        </h2>
      </div>
      <div className="hidden sm:block absolute sm:top-[43%] top-[48%] left-[11%]">
        <Button>Buy Now</Button>
      </div>
    </div>
  );
};

export default HomePage;
