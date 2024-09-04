import { MostSearch, NavBar, TopSection } from "../";
import img from "../../assets/hero.jpg";

export const Home = () => {
  return (
    <main className=" flex flex-col  gap-8 bg-brand min-h-screen">
      <div className="fixed">
        <img src={img} alt="" className="h-screen w-screen" />
      </div>

      <NavBar />
      <TopSection />
      <MostSearch />
    </main>
  );
};
