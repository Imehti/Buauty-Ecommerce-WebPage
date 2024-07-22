import Navbar from "./Navbar";
import { Button } from "./ui/button";

const HomePage = () => {
  return (
    <div className="bg-[url('src/assets/home-bg.webp')] bg-no-repeat h-full bg-cover relative overflow-hidden ">
      <Navbar />
      <div className="absolute top-[34%] left-[3%]">
        <h2 className="italic text-4xl font-mono font-bold text-left text-pink-700">
        Be Kind To Your Beauty
      </h2>
      </div>
      <div className="absolute top-[43%] left-[11%]">
        <Button>Explore</Button>
      </div>
      
    </div>
  );
};

export default HomePage;
