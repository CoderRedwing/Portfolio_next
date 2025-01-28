'use client'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
    id: 1,
    name: "Github",
    designation: "Let's Build",
    image:
      "/images/github.png",
    },
    {
    id: 2,
    name: "Linkdin",
    designation: "Let's Connect",
    image:
      "/images/linkedin.png",
    },

    {
    id: 3,
    name: "Gmail",
    designation: "Get in Touch",
    image:
      "/images/gmail.png",
    },

    {
    id: 4,
    name: "Twitter",
    designation: "Let's Tweet",
    image:
      "/images/twitter.png",
    },
]



function Footer() {
    return (
        <div className="relative h-[35rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex 
            flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl 
                text-white font-bold text-center mb-8"
                >Let's Connect With Me</h2>
                <p className="text-base md:text-lg text-white text-center mb-4"
                >Designed and developed with passion © Ajitesh Mishra | Let's create something amazing together!</p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={people} />

                </div>

            </WavyBackground>

        </div>
    )
}

export default Footer;