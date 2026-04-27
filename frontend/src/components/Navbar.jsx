import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import Navigation Hook
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "./Logo.jsx";
import Auth from "../context/Auth.jsx";

// 2. DATA CONFIGURATION (Efficient & Centralized)
// Change "path" here to control where the click takes you.
const navItems = [
  { name: "Home", path: "/" },
  { name: "Market", path: "/marketplace" },
  { name: "Learn", path: "/learn" },
  { name: "Ideas", path: "/ideas" }, // <--- USER REQUEST: Ideas directs to Ideas page
  { name: "News", path: "/news" },
  { name: "Help", path: "/help" },
  { name: "Directory", path: "/directory" },
];

const Navbar = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [showAuth, setShowAuth] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 3. CENTRALIZED CLICK HANDLER
  // This function handles the click for both Desktop and Mobile
  const handleNavClick = (path) => {
    setOpenMenu(false); // Close mobile menu if open
    navigate(path); // Go to the specific page
  };

  // Optimized Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-50 bg-[#f7f4ee] shadow-md"
      >
        <div className="flex items-center h-20 px-4 max-w-7xl mx-auto">
          {/* Logo - Click goes home */}
          <div
            className="flex-1 transition hover:scale-105 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo />
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center justify-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)} // Uses the specific path
                className="relative text-[#1f4d3a] text-lg font-medium mx-4 group bg-transparent border-none cursor-pointer"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1f4d3a] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop Login */}
          <div className="hidden md:flex flex-1 justify-end">
            <button
              onClick={() => setShowAuth(true)}
              className="bg-[#214e3b] text-white px-4 py-1 rounded font-semibold transition hover:scale-105 shadow-lg shadow-green-700/40"
            >
              Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpenMenu(true)}
            className="md:hidden text-[#1f4d3a]"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#f7f4ee] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 shadow">
              <div onClick={() => handleNavClick("/")}>
                <Logo />
              </div>
              <button onClick={() => setOpenMenu(false)}>
                <X size={28} />
              </button>
            </div>

            <motion.nav
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-col items-center justify-center flex-1 gap-6"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)} // Reusing the same smart handler
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="text-2xl font-semibold text-[#1f4d3a] bg-transparent border-none"
                >
                  {item.name}
                </motion.button>
              ))}

              <button
                onClick={() => {
                  setOpenMenu(false);
                  setShowAuth(true);
                }}
                className="mt-6 bg-[#214e3b] text-white px-6 py-2 rounded text-lg shadow"
              >
                Login
              </button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
