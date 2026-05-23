import { Ripple } from "@/components/ui/ripple";

export default function ContactInfo() {
  return (
    <main className="relative h-[75vh] w-full max-w-4xl mx-auto">
      <Ripple />
      <div className="flex flex-col justify-center w-full h-full gap-8 px-5">
        <div className="flex flex-col md:items-center">
          <h1 className="text-2xl md:text-3xl font-semibold leading-10 tracking-tight">
            Looking for My Next Challenge
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Available for remote and relocation roles
          </p>
        </div>
        <div className="flex gap-3 md:justify-center">
          <a href="https://www.linkedin.com/in/sai-zay-linn-htet" target="_blank" className="underline underline-offset-3">
            {" "}
            View LinkedIn{" "}
          </a>
          <a href="/Resume.pdf" target="_blank" className="underline underline-offset-3">
            {" "}
            Download Resume{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
