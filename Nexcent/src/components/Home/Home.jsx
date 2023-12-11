import Hero from "./Hero";
import Clients from "./Clients";
import Community from "./Community";

export default function Home() {
  return (
    <main
      id="home"
        className="
        "
      >
          {/* Hero section */}
          <Hero />

          {/* Clients section */}
          <Clients />

          {/* Community section */}
          <Community />
      </main>
  );
}
