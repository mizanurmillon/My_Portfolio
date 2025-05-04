import { FiMenu, FiX } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Smooth Scroll Functionality
  const handMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpenMenu(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] ${
        isScrolled
          ? "{style={{ backgroundColor: 'rgba(5, 4, 20, 0.5)' }}} backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Md Mizanur</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Rahman</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection == item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social media icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/mizanurmillon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-mizanur-rahman-5a1200280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/mdmijanur.rahaman.54966834"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="mailto:mr7517218@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <MdEmail size={24} />
          </a>
          <a
            href="https://wa.me/01705802099"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaWhatsappSquare size={24} />
          </a>
        </div>

        {/* Mobile Menu icon */}
        <div className="md:hidden">
          {openMenu ? (
            <FiX
              onClick={() => setOpenMenu(!openMenu)}
              size={24}
              className="text-3xl hover:text-[#8245ec] cursor-pointer"
            />
          ) : (
            <FiMenu
              onClick={() => setOpenMenu(!openMenu)}
              size={24}
              className="text-3xl hover:text-[#8245ec] cursor-pointer"
            />
          )}
        </div>

        {/* Mobile menu items */}

        {openMenu && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden" style={{ backgroundColor: "rgba(5, 4, 20, 0.4)" }}>
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              {/* Social media icons */}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/mizanurmillon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-mizanur-rahman-5a1200280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://www.facebook.com/mdmijanur.rahaman.54966834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="mailto:mr7517218@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <MdEmail size={24} />
                </a>
                <a
                  href="https://wa.me/01705802099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-text-white"
                >
                  <FaWhatsappSquare size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
