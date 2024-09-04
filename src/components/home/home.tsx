import { MostSearch, NavBar, TopSection } from "../";

export const Home = () => {
  return (
    <main className=" flex flex-col p-4 gap-4 bg-brand min-h-screen">
      <NavBar />
      <TopSection />
      <MostSearch />
    </main>
  );
};
