
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Reviews from "../components/Reviews";
import Services from "../components/Services";
import Survey from "../components/Survey";

export default function Home() {
  return (
    <main >
      <Hero />
      <Featured />
      <Services />
      <Menu />
      <Survey />
      <Reviews/>
    </main>
  );
}
