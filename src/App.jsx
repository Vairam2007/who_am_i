import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

// Reusable Button
const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`w-full py-3 px-4 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${className}`}
  >
    {children}
  </button>
);

// Reusable Input
const Input = ({ label, type = "text", className = "", ...props }) => (
  <div className="relative mb-5">
    <input
      type={type}
      placeholder=" "
      {...props}
      className={`peer w-full px-4 pt-5 pb-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 ${className}`}
    />
    <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400">
      {label}
    </label>
  </div>
);

export default function App() {
  const [role, setRole] = useState("user");
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleUserLogin = () => {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Dummy credentials
    if (email === "user@gmail.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Incorrect email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-dark-leaves" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-gray-850/70 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-3xl p-10 relative z-10"
      >
        {/* Branding */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-300">Nature’s Touch</h1>
          <p className="text-gray-400 mt-1 text-sm">Discover the world of herbal wellness</p>
        </div>

        {/* Toggle */}
        <div className="flex mb-6 bg-gray-900/50 rounded-full overflow-hidden border border-gray-700">
          <button
            onClick={() => setRole("user")}
            className={`w-1/2 py-2 font-semibold rounded-full transition-colors duration-300 ${
              role === "user" ? "bg-green-500/60 text-white" : "text-gray-300 hover:bg-gray-800/60"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setRole("worker")}
            className={`w-1/2 py-2 font-semibold rounded-full transition-colors duration-300 ${
              role === "worker" ? "bg-green-500/60 text-white" : "text-gray-300 hover:bg-gray-800/60"
            }`}
          >
            Worker
          </button>
        </div>

        {/* USER LOGIN / SIGNUP */}
        {role === "user" && (
          <motion.div key="user" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-semibold text-green-300 mb-6 text-center">{isSignup ? "Sign Up to Begin" : "Welcome Back"}</h2>

            {isSignup && <Input label="Full Name" type="text" />}
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />

            <Button className="bg-green-600 hover:bg-green-500 text-white mb-4" onClick={handleUserLogin}>
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>

            <Button className="flex items-center justify-center gap-2 border border-green-400 hover:bg-green-600/20 text-white mb-4">
              <FcGoogle size={20} /> Continue with Google
            </Button>

            <p className="mt-4 text-center text-gray-400 text-sm">
              {isSignup ? "Already have an account?" : "Don’t have an account?"}
              <button onClick={() => setIsSignup(!isSignup)} className="ml-1 text-green-400 font-semibold hover:underline">
                {isSignup ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </motion.div>
        )}

        {/* WORKER LOGIN */}
        {role === "worker" && (
          <motion.div key="worker" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="text-xl font-semibold text-green-300 mb-6 text-center">Worker Login</h2>
            <Input label="Batch ID" type="text" />
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />

            <Button className="bg-green-600 hover:bg-green-500 text-white mb-4">Login</Button>

            <p className="mt-2 text-center text-gray-400 text-sm">
              Verified workers use Batch ID for herbal supply chain tracking.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
