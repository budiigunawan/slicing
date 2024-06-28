import { Hero } from "../components/ableton/hero";
import { Navbar } from "../components/ableton/navbar";

export const Homepage = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1600px] mx-auto bg-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};
