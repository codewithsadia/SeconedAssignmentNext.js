const Service = () => {
    return (
      <div className="container mx-auto p-4 text-black">
        <h1 className="text-3xl font-bold text-center mb-4 text-pink-600 hover:underline">
          Web Development Projects
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <li className="bg-pink-300 border-black text-center shadow-md rounded-lg p-4 hover:bg-blue-500 text-black">
            Weather Dashboard
          </li>
          <li className="bg-pink-300 border-black text-center shadow-md rounded-lg p-4 hover:bg-blue-500 text-black">
            Portfolio Website
          </li>
          <li className="bg-pink-300 border-black text-center shadow-md rounded-lg p-4 hover:bg-blue-500 text-black">
            Blog Platform
          </li>
          <li className="bg-pink-300 border-black text-center shadow-md rounded-lg p-4 hover:bg-blue-500 text-black">
            E-commerce Store
          </li>
          <li className="bg-pink-300 border-black text-center shadow-md rounded-lg p-4 hover:bg-blue-500 text-black">
            Simple Calculator
          </li>
          <li className="bg-pink-300 border-black text-center shadow-md rounded-lg p-4 hover:bg-blue-500 text-black">
            Todo List Application
          </li>
        </ul>
        <br />
        <button className="p-4 w-full bg-pink-600 text-white mt-auto hover:bg-blue-500 rounded-lg">
          <a href="/projects" className="block w-full h-full">
            View my Projects
          </a>
        </button>
      </div>
    );
  };
  
  export default Service;
  