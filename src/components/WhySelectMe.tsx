"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Hey I'm Ajitesh Mishra",
    description:
      "Aspiring backend developer with expertise in Node.js, Express.js, PostgreSQL, and scalable systems. Passionate about API design and real-time applications.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white">
        <Image
          src="/images/Ajitesh.jpeg"
          width={300}
          height={300}
          className="rounded-full object-cover object-top"
          alt="Ajitesh Mishra"
        />
      </div>
    ),
  },
  {
    title: "Vs Code Inspired Online Code Compiler and editor",
    description:
      "A VS Code-inspired code editor enabling users to write and execute code seamlessly with Dockerized environments for isolated and secure execution.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-white">
        <Image
          src="/images/book1.png"
          width={300}
          height={300}
          className="object-cover"
          alt="Online Code Compiler"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Built a real-time chat application with instant messaging, profile image uploads, and secure user authentication using WebSocket and MongoDB.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
        <Image
          src="/images/book1.png"
          width={300}
          height={300}
          className="object-cover"
          alt="Real-Time Chat Application"
        />
      </div>
    ),
  },
  {
    title: "To-Do App API",
    description:
      "Developed a REST API for secure and reliable task management with PostgreSQL, focusing on security and high performance.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white">
        <Image
          src="/images/book1.png"
          width={300}
          height={300}
          className="object-cover"
          alt="To-Do App API"
        />
      </div>
    ),
  },
  {
    title: "Online Robust Movie Reservation System",
    description:
      "Designed a backend system for reserving movie tickets with user authentication, real-time seat reservations, and role-based admin features.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white">
        <Image
          src="/images/book1.png"
          width={300}
          height={300}
          className="object-cover"
          alt="Movie Reservation System"
        />
      </div>
    ),
    },
];



function WhySelectMe() {
    return (
        <div className="pt-5">
            <StickyScroll content={content}/>
        </div>
    )
}

export default WhySelectMe;