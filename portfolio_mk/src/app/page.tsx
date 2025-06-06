import Image from "next/image";
import Hero from "../../components/Hero";
import Header from "../../components/ui/Header"

export default function Home() {
  return (
    <main className = "relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Header />
      </div>
    </main>
  );
}
