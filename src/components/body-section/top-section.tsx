import hero from "../../assets/hero.jpg";
import { InputField } from "../../units";
export const TopSection = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${hero})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative"
    >
      <section className="bg-brand min-w-[450px] absolute top-52 left-52 p-8 rounded-xl flex gap-4">
        <InputField inputSize="large" placeholder="Select your location" />

        <InputField inputSize="large" placeholder="Select your location" />
      </section>
    </main>
  );
};
