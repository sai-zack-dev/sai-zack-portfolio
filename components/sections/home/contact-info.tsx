import { Ripple } from "@/components/ui/ripple";

export default function ContactInfo() {
  return (
    <main className="relative flex h-[75vh] w-full max-w-4xl items-center justify-center sm:items-start mx-auto py-24">
      <div className="w-full h-full justify-center flex flex-col items-center gap-5">
        <Ripple />
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {/* {"Let's"} Build Something Together */}
            Looking for My Next Challenge
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Available for remote and relocation roles
          </p>
        </div>
        <div className="flex gap-3">
          <a href="" target="_blank" className="underline underline-offset-3">
            {" "}
            View LinkedIn{" "}
          </a>
          <a href="" target="_blank" className="underline underline-offset-3">
            {" "}
            Download Resume{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
