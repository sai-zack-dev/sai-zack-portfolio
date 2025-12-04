export default function HeroSection() {
  return (
    <div className="flex min-h-screen w-full max-w-4xl items-center justify-center bg-white dark:bg-black mx-auto py-24 h-screen flex-col sm:flex-row">
      <div className="w-full h-full justify-center items-center flex">
        <div className="avatar mb-4">
          <div className="w-50 h-50 rounded-full bg-gray-500"></div>
        </div>
      </div>
      <div className="w-full h-full justify-center items-start flex flex-col p-5 gap-3">
        <p> Hello, It's me.</p>
        <h1 className="text-5xl">SAI ZACK</h1>
        <h3 className="text-2xl">Software Engineer / Designer / Developer</h3>
        <p>
          I build web, mobile, and desktop solutions in JavaScript and PHP,
          along with supporting UI/UX work. I deliver complete,
          production-ready applications from idea to launch.
        </p>
      </div>
    </div>
  );
}
