import { useState, useEffect } from "react";

const Auth = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
      <div className="bg-white w-[350px] p-6 rounded-xl shadow-lg relative">

        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form
          className="space-y-3"
          onSubmit={(e) => e.preventDefault()}
        >
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full border p-2 rounded"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-emerald-600 font-semibold"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
