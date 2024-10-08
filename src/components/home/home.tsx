import { MostSearch, NavBar, TopSection, Footer } from "../";
import img from "../../assets/hero.jpg";

export const Home = () => {
  return (
    <main className=" flex flex-col  gap-16 bg-brand min-h-screen">
      <div className="fixed">
        <img src={img} alt="" className="h-screen w-screen" />
      </div>

      <NavBar />
      <TopSection />
      <MostSearch />
      <Footer />
    </main>
  );
};
