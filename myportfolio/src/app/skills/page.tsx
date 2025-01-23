"use client";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

const Skills = () => {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <header className="text-center bg-blue-500 text-white rounded">
        <h1 className="text-3xl font-bold">My Skills</h1>
      </header>
      <div className="mt-6 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <section className="mb-8 p-6 bg-white text-black rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/html.jpg"
              alt="HTML"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">HTML</h2>
            <p>HTML (HyperText Markup Language) defines the basic structure of web pages.</p>
          </section>

          <section className="mb-8 p-6 bg-white text-black rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/css.jpg"
              alt="CSS"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">CSS</h2>
            <p>CSS (Cascading Style Sheets) is used for styling and layout.</p>
          </section>

          <section className="mb-8 p-6 bg-white text-black rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/java.jpg"
              alt="JavaScript"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">JavaScript</h2>
            <p>JavaScript is used to add interactivity and dynamic behavior to web pages.</p>
          </section>

          <section className="mb-8 p-6 bg-white text-black rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/typescript.jpg"
              alt="TypeScript"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">TypeScript</h2>
            <p>TypeScript is a typed superset of JavaScript that provides better error handling and code quality.</p>
          </section>

          <section className="mb-8 p-6 bg-white text-black rounded-lg shadow-md flex flex-col items-center">
            <Image
              src="/next.jpg"
              alt="Next.js"
              width={100}
              height={100}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Next.js</h2>
            <p>Next.js is a React framework that supports server-side rendering and static site generation.</p>
          </section>

          <div className="flex justify-center items-center rounded bg-gray-100 w-full">
            <a
              href='/projects'
              className="bg-blue-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full text-center"
              onClick={handleClick}
            >
              Click Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
