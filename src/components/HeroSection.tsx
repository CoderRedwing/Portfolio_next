import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col 
        items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
        >
             <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text 
                text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                >Hey I&apos;m Ajitesh Mishra</h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
                >Software developer with expertise in backend development, skilled in JavaScript, Node.js, PostgreSQL, Docker, and some experience in Flutter. Interested in
                    bringing a strong work ethic and fresh perspective to an entry-level
                    role, expanding backend expertise, and contributing
                    to innovative projects.</p>
                <div className="mt-5">
                    <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-bold"
      >
        Know More
      </Button>
                </div>

            </div>

        </div>
    )
}

export default HeroSection;