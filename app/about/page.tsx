import AboutMe from "@/components/sections/about/about-me";
import CurrentStatus from "@/components/sections/about/current-status";
import Hobbies from "@/components/sections/about/hobbies";
import Journey from "@/components/sections/about/journey";

export default function About() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-centerbg-white dark:bg-black sm:items-start">
      {/* Page Content */}
      <div className="flex min-h-screen w-full max-w-7xl items-center justify-center bg-white dark:bg-black sm:items-start mx-auto py-24 h-screen">
        <AboutMe />
        <CurrentStatus />
      </div>
      <Journey />
      <Hobbies />
    </main>
  );
}
