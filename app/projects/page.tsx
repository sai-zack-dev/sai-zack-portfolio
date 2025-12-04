import ProjectsIntro from "@/components/sections/projects/intro"
import ProjectList from "@/components/sections/projects/list";

export default function Projects() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-centerbg-white dark:bg-black sm:items-start">
      {/* Page Content */}
      <div className="flex min-h-screen w-full max-w-7xl items-center justify-center bg-white dark:bg-black sm:items-start mx-auto py-24 h-screen">
        <ProjectsIntro />
        <div className="w-full h-full bg-blue-100"></div>
      </div>
      <ProjectList />
    </main>
  );
}