import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import config from "../utils/config";
import WrappedButton from "../components/Button";

const { routes } = config;

const tabs = [
  { name: "Home", link: routes.home, index: 0 },
  { name: "About Us", link: "", index: 1 },
  { name: "Events", link: "", index: 2 },
  { name: "Projects", link: routes.product, index: 3 },
  { name: "Contact", link: "", index: 4 },
];

const HomeLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleToggleMenu = (toggle) => {
    setShowMenu(toggle !== undefined ? toggle : !showMenu);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col ">
      <nav className="mt-3 text-[var(--text-bg)] bg-[var(--c-white-2)] md:flex md:justify-between w-full px-3">
        <div className="container  py-2  flex justify-between  items-center ">
          <h1 className="lg:ml-24">Logo</h1>
          <div className="md:hidden">
            <button
              onClick={() => handleToggleMenu()}
              type="button"
              className="text-[var(--text-bg)] hover:text-[var(--text-bg)] focus:outline-none focus:text-[var(--text-bg)]"
            >
              {showMenu ? (
                <AiOutlineClose className="w-[30px] h-[30px]" />
              ) : (
                <AiOutlineMenu className="w-[30px] h-[30px]" />
              )}
            </button>
          </div>
          <div className="hidden md:block ml-[15%] md:pl-0 md:pb-0">
            {tabs.map((tab) => (
              <Link
                key={tab.index}
                to={tab.link}
                onClick={() => handleTabClick(tab.index)}
                className={`block mt-4 md:inline-block md:mt-0 md:ml-6 ${
                  activeTab === tab.index
                    ? "font-bold"
                    : "font-normal"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:block  ">
          <WrappedButton
          value="Call to Action" 
          onClick={() => alert('Button clicked')}
           wrapperClass="bg-black py-2 px-4 text-[var(--c-white-2)] rounded-md"
          />
        </div>
        </div>
        {showMenu && (
          <div className="md:hidden  pb-4 w-[100%] flex gap-4">
            {tabs.map((tab) => (
              <Link
                key={tab.index}
                to={tab.link}
                onClick={() => handleTabClick(tab.index)}
                className={`block mt-4 md:inline-block md:mt-0 md:ml-6 ${
                  activeTab === tab.index
                    ? "font-bold text-[12px]"
                    : "font-normal text-[12px]"
                }`}
              >
                {tab.name}
              </Link>
            ))}
          </div>
        )}
        
      </nav>
      <div className="flex-1 overflow-y-auto ">{children}
      </div>
      <footer className="mt-24 bg-[var(--cc-grey-1)] text-white relative md:flex md:justify-between mt-6  gap-8 pt-14 md:h-[500px] h-[350px] ">
        <div className="xl:w-[480px] lg:w-[380px] md:w-[250px] w-[100px] h-[120px] xl:h-[450px] lg:h-[350px] md:h-[310px] bg-[var(--c-img-bg-1)]  m-auto absolute xl:bottom-[20%] lg:bottom-[35%] md:bottom-[48%] bottom-[75%] xl:left-[10%] lg:left-[8%] md:left-[8%] left-[10%]">
        </div>
        <div className="text-[var(--text-bg)] flex flex-col xl:left-[50%] lg:left-[50%] md:left-[50%] absolute xl:bottom-[18%] lg:bottom-[10%] md:bottom-[15%] bottom-[2%]">
            <h1 className="text-[var(--c-dark-1)] lg:text-5xl md:text-2xl text-xl md:w-[60%] font-bold w-[100%] mb-6 text-center md:text-start px-2 md:px-0 ">Lorem, ipsum dolor sit amet consectetur</h1>
            <p className="text-sm md:w-[60%] w-[100%] text-center md:text-start px-3 md:px-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliqua. Ut enim ad minim veniam, quis nostrud 
            ut aliqua. Ut enim ad minim veniam, quis nostrud 
            </p>
            <WrappedButton
          value="Call to Action" 
          onClick={() => alert('Button clicked')}
           wrapperClass="bg-black m-auto md:ml-0 text-[var(--c-white-2)] rounded-md xl:w-[26%] lg:w-[28%]  py-2 px-5 xl:px-5 lg:px-5 md:pl-3 mt-8 text-center"
          />
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
