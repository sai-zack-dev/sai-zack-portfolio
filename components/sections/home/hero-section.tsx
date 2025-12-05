import { AuroraText } from "@/components/ui/aurora-text";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export default function HeroSection() {
  return (
    <div className="flex min-h-screen w-full max-w-4xl items-center justify-center bg-white dark:bg-black mx-auto py-24 h-screen flex-col sm:flex-row">
      <div className="w-full h-full justify-center items-center flex p-5">
          <PixelatedCanvas
            src="/frame.png"
            width={400}
            height={400}
            cellSize={3}
            dotScale={0.9}
            shape="square"
            backgroundColor="#000000"
            dropoutStrength={0.4}
            interactive
            distortionStrength={3}
            distortionRadius={80}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="#FFFFFF"
            tintStrength={0.2}
            className="rounded-xl border border-neutral-800 shadow-lg"
          />
      </div>
      <div className="w-full h-full justify-center items-start flex flex-col p-5 gap-3">
        <p className="text-sm"> Hello, It's me.</p>
        <AuroraText className="text-6xl font-bold">SAI ZACK</AuroraText>
        <h3 className="text-2xl">Software Engineer</h3>
        <p className="text-sm">
          I build web, mobile, and desktop solutions in JavaScript and PHP,
          along with supporting UI/UX work. I deliver complete, production-ready
          applications from idea to launch.
        </p>
        <button>Download Resume</button>
      </div>
    </div>
  );
}
