import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing tasks.",
    img: "/todo.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Countdown Timer",
    desc: "A Next.js and TypeScript powered website with an interactive countdown feature.",
    img: "/clocktimer.png",
    tags: ["Next.js", "Node", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Simple Calculator Projects",
    desc: "A basic HTML CSS & TypeScript calculator for simple projects.",
    img: "/calculator.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "ATM Machine",
    desc: "A React & TypeScript based app for managing and organizing financial transactions.",
    img: "/ATMmachion.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "Static Interactive Resume",
    desc: "A TypeScript based interactive resume built with HTML and CSS allowing users to showcase their skills dynamically.",
    img: "/resum.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
  {
    id: 6,
    title: "Birthday Card",
    desc: "A simple birthday card built with HTML and CSS allowing users to showcase creativity.",
    img: "/birthdaycard.png",
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-10 pr-2 ml-28 m-2 gap-20 text-pink-600">
      <h2 className="flex justify-center text-3xl font-serif font-bold mb-4">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-2 gap-4">
        {data.map((el) => (
          <div
            key={el.id}
            className="w-full max-w-xs bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={el.img}
              alt={el.title}
              width={400}
              height={250}
              className="object-cover w-full h-46"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{el.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{el.desc}</p>
              <div className="flex flex-wrap gap-2">
                {el.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-900 text-xs font-semibold px-2 py-1 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
                {/* Button */}
                <div className="flex justify-center">
                  <button className="bg-pink-400 text-white font-semibold py-3 px-6 rounded-md hover:bg-pink-700 transition duration-300">
                    <Link href="/">Back to Home</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
