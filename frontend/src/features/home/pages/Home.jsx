import About from "../components/About.jsx";
import Features from "../components/Features.jsx";
import Footer from "../../../components/Layout/Footer.jsx";
import { Wheat } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import FloatingButton from "../../../components/UI/FloatingButton.jsx";
import homePageImage from "../../../assets/homePage.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative bg-[#f5f7eb]">
        <div className="container mx-auto px-6 lg:py-40">
          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f4d3a] leading-tight mb-6">
                Connecting Every Hand in the Village{" "}
                <Wheat className="inline-block w-10 h-10 text-yellow-500 ml-2" />
              </h1>

              <p className="text-lg text-[#1f4d3a] mb-8 min-h-[32px]">
                <TypeAnimation
                  sequence={[
                    "A community platform for farmers",
                    3000,
                    "Where farmers unite to share knowledge",
                    3000,
                    "Empowering farmers through connection",
                    3000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>

              {/* CTA BUTTONS */}

              <div className="flex flex-wrap gap-6">
                <button
                  onClick={() => navigate("/marketplace")}
                  className="px-7 py-3 rounded-xl bg-[#1f4d3a] text-white font-medium shadow-md
                hover:bg-[#023322] hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Market
                </button>

                <button
                  onClick={() => navigate("/learn")}
                  className="px-7 py-3 rounded-xl bg-[#1f4d3a] text-white font-medium shadow-md
                hover:bg-[#023322] hover:-translate-y-1 transition-all duration-300"
                >
                  Learn Skills
                </button>

                <button
                  onClick={() => navigate("/ideas")}
                  className="px-7 py-3 rounded-xl bg-[#fdf0cc] text-[#1f4d3a] font-medium shadow-md
                hover:bg-[#ffe599] hover:-translate-y-1 transition-all duration-300"
                >
                  Share Your Idea
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center">
              <img
                src={homePageImage}
                alt="Village illustration"
                className="w-full max-w-lg rounded-lg shadow-lg"
              />
            </div>

            <FloatingButton />

            <div
              className="absolute left-0 right-0 bottom-0 pointer-events-none"
              aria-hidden
            >
              <svg
                viewBox="0 30 1000 90"
                className="w-full fill-current text-amber-200/30"
              >
                <path
                  d="M0,0
                    C100,150 480,80 730,40
                    C910,0 1200,80 1440,100
                    L1440 120 L0 120 Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
