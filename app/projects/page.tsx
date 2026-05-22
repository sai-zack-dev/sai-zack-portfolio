import Header from "@/components/common/Header";
import ProjectList from "@/components/sections/projects/list";

export default function Projects() {
  return (
    <main className="flex flex-col w-full max-w-4xl items-center justify-center sm:items-start mx-auto mt-14 p-5 gap-10">
      <Header
        title="Projects That Reflect My Passion"
        description="Discover the projects that highlight my journey in tech, from experimental ideas to real-world applications crafted with passion and precision."
      />
      <ProjectList />
    </main>
  );
}