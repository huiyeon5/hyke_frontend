import React from 'react';
import Navbar from '../components/Navbar';
import NavButton from '../components/NavButton';
import '../styles/animation.css'


const Landing = () => {
  const imageUrl = require(`../assets/background.png`)
  return (
    <div>
      <Navbar />
      <div className="min-w-full h-screen bg-center py-20" style={{backgroundColor:`#0e6cff`,backgroundImage:`url(${imageUrl})`}}>
        <div className="w-full h-full">
          <div className="container m-auto h-full flex items-center content-center">
            <div className="flex w-full">
              <div className="flex items-center w-full">
                <div className="w-5/12 h-full flex flex-col justify-center px-2">
                  <h1 className="text-6xl text-white" style={{fontFamily:`Rubik`}}>Hyke Up <br/> Your Skills</h1>
                  <p className="text-white leading-loose mt-6" style={{fontFamily:`Rubik`}}>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
                  <div className="mt-10">
                    <NavButton destination='/course' buttonName='Get Started' />
                  </div>
                </div>
                <div className="w-7/12 flex justify-start items-center flex-col relative">
                  <img src={require("../assets/home-2-img.png")} className="landing-png w-10/12 z-10" alt="working together"/>
                  <img src={require("../assets/homr-2-bg-bottom.png")} className="w-10/12 z-0 absolute bottom-0" style={{opacity: 0.2}} alt="bottom rings"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;