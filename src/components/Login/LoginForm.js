import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">
          Email Address
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
              focus:ring-2 focus:ring-primary-300 focus:border-primary-300
              pl-10 transition-all duration-300 bg-white"
            placeholder="Enter your email"
          />
          <Mail
            className="absolute left-3 top-2.5 text-neutral-400"
            size={20}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
              focus:ring-2 focus:ring-primary-300 focus:border-primary-300
              pl-10 pr-10 transition-all duration-300 bg-white"
            placeholder="Enter your password"
          />
          <Lock
            className="absolute left-3 top-2.5 text-neutral-400"
            size={20}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-neutral-400 
              hover:text-neutral-600 transition-colors duration-300"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-sm text-primary-600 hover:text-primary-700 
            font-medium transition-colors duration-300"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-3 rounded-xl
          hover:bg-primary-700 transition-all duration-300 font-medium
          flex items-center justify-center gap-2 group"
      >
        Login
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
};

export default LoginForm;
