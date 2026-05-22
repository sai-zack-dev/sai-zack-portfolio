import Header from "@/components/common/Header";
import { Timeline9 } from "@/components/ui/timeline9";
import { experiences } from "@/data/experience";

export default function WorkExp() {
  return (
    <main className="flex min-h-screen w-full sm:items-start py-24 flex-col">
      <div className="w-full h-full p-5 max-w-4xl mx-auto">
        <Header
          title="Work_Experience"
          description="A journey through the roles, projects, and experiences that have shaped my growth in design and software development over the years."
          prefix="#"
        />

        <Timeline9 items={experiences} />
      </div>
    </main>
  );
}
