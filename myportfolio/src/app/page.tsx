import React from "react"
const Home = () => {
  return (
    // Main Container using TailwindCSS classes
    <div>
      <div id='Hero'className='min-h-screen bg-no-repeat bg-[url(/girl.png)] bg-right lg:bg-[90%] bg-cover' 
        style={{backgroundSize: "25%"}}   // Inline style for background size adjustment
      >
        <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='flex justify-center text-8xl'>
            <div>
              {/* New lines and text display */}
              <br />
              <p>I&apos;m </p>
              <p>Sadia</p>
              <p>Imran</p>
            </div>
          </div>
          <div className='hidden lg:block'></div>
        </div>
      </div>
    </div>
  )
}

export default Home
