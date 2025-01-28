'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TechPeCharchaData = [
    {
      "quote": "Artificial Intelligence is the new electricity.",
      "name": "Andrew Ng",
      "title": "AI Pioneer and Co-Founder of Coursera"
    },
    {
      "quote": "Machine learning will automate jobs that most people thought could only be done by people.",
      "name": "Dave Waters",
      "title": "AI Thought Leader"
    },
    {
      "quote": "Blockchain is the tech. Bitcoin is merely the first mainstream manifestation of its potential.",
      "name": "Marc Kenigsberg",
      "title": "Blockchain Expert"
    },
    {
      "quote": "The web as I envisioned it, we have not seen it yet. The future is still so much bigger than the past.",
      "name": "Tim Berners-Lee",
      "title": "Inventor of the World Wide Web"
    },
    {
      "quote": "Your mobile device has quickly become the easiest portal into your digital self.",
      "name": "Phil Nickinson",
      "title": "Mobile Technology Expert"
    },
    {
      "quote": "The metaverse is not a single place. It’s a collection of technologies that create a universe of possibilities.",
      "name": "Matthew Ball",
      "title": "Metaverse Strategist"
    },
    {
      "quote": "The biggest part of our digital transformation is changing the way we think.",
      "name": "Simeon Preston",
      "title": "Technology Executive"
    }
  ]




function TechPeCharcha() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] 
        relative flex flex-col  items-center justify-center overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-8 z-10">Tech Pe Charcha: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards
        items={TechPeCharchaData}
        direction="right"
        speed="slow"
      />
                </div>
            </div>
        </div>
    )
}

export default TechPeCharcha;