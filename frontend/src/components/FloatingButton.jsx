import { useNavigate } from "react-router-dom";

function FloatingButton() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-center">
      {/* The wrapper handles the fixed position and the 'group' hover state */}

      {/* Pure CSS Tooltip - physically ignores the mouse with pointer-events-none */}
      <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap bg-gray-800 text-white text-sm px-3 py-1.5 rounded shadow-lg pointer-events-none">
        Chat Support
        {/* The little downward arrow triangle */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
      </div>

      {/* Button */}
      <div
        onClick={() => navigate("/Chat")}
        className="bg-blue-600 hover:bg-blue-900 text-white rounded-full p-4 shadow-lg transition duration-300 ease-in-out cursor-pointer"
        aria-label="Floating Action Button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </div>
  );
}

export default FloatingButton;
