import Hero from "./Hero";

export default function Home() {
  return (
      <main
        className="
          bg-slate-100
        "
      >
        <div className="
            container mx-auto px-6

          ">

          {/* Hero section */}
          <Hero />

        </div>
      </main>
  );
}
