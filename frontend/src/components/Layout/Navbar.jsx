import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "../UI/Logo.jsx";
import Auth from "../../features/auth/context/Auth.jsx";

// Navigation items
const navItems = [
  { name: "Home", path: "/" },
  { name: "Market", path: "/marketplace" },
  { name: "Learn", path: "/learn" },
  { name: "Ideas", path: "/ideas" },
  { name: "News", path: "/news" },
  { name: "Help", path: "/help" },
  { name: "Directory", path: "/directory" },
];

const MotionDiv = motion.div;
const MotionHeader = motion.header;
const MotionNav = motion.nav;
const MotionButton = motion.button;

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ MUST be inside the component

  const [showAuth, setShowAuth] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showNav, setShowNav] = useState(true);

  // Navigation handler
  const handleNavClick = (path) => {
    setOpenMenu(false);
    navigate(path);
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 80) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  });

  return (
    <>
      {/* ================= HEADER ================= */}
      <MotionHeader
        initial={{ y: -100 }}
        animate={{ y: showNav ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="sticky top-0 z-50 bg-[#f7f4ee] shadow-md"
      >
        <div className="flex items-center h-20 px-4 max-w-7xl mx-auto">
          {/* ================= LOGO ================= */}
          <div
            className="flex-1 transition hover:scale-105 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo />
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex items-center justify-center">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative text-[#1f4d3a] text-lg mx-4 group bg-transparent border-none cursor-pointer transition-all duration-200 ${
                    isActive ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-[#1f4d3a] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* ================= DESKTOP LOGIN ================= */}
          <div className="hidden md:flex flex-1 justify-end">
            <button
              onClick={() => setShowAuth(true)}
              className="bg-[#214e3b] text-white px-4 py-1 rounded font-semibold transition hover:scale-105 shadow-lg shadow-green-700/40"
            >
              Login
            </button>
          </div>

          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            onClick={() => setOpenMenu(true)}
            aria-label="Open navigation menu"
            className="md:hidden shrink-0 text-[#1f4d3a]"
          >
            <Menu size={28} />
          </button>
        </div>
      </MotionHeader>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#f7f4ee] flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 h-20 shadow">
              <div
                onClick={() => handleNavClick("/")}
                className="cursor-pointer"
              >
                <Logo />
              </div>

              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpenMenu(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <motion.nav
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col items-center justify-center flex-1 gap-6"
            >
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.path)}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      show: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    className={`text-2xl text-[#1f4d3a] bg-transparent border-none transition-all duration-200 ${
                      isActive ? "font-bold" : "font-semibold"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                );
              })}

              {/* Mobile Login */}
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

      {/* ================= AUTH ================= */}
      {showAuth && <Auth onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Navbar;
