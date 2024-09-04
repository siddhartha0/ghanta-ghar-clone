import { MostSearch, NavBar, TopSection } from "../";

export const Home = () => {
  return (
    <main className=" flex flex-col relative p-4 gap-8 bg-brand min-h-screen">
      <NavBar />
      <TopSection />
      <MostSearch />
    </main>
  );
};
