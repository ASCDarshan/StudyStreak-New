import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight, User } from "lucide-react";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Handle signup submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            First Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
                focus:ring-2 focus:ring-primary-300 focus:border-primary-300
                pl-10 transition-all duration-300 bg-white"
              placeholder="First name"
            />
            <User
              className="absolute left-3 top-2.5 text-neutral-400"
              size={20}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Last Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
                focus:ring-2 focus:ring-primary-300 focus:border-primary-300
                pl-10 transition-all duration-300 bg-white"
              placeholder="Last name"
            />
            <User
              className="absolute left-3 top-2.5 text-neutral-400"
              size={20}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Username
          </label>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
                focus:ring-2 focus:ring-primary-300 focus:border-primary-300
                pl-10 transition-all duration-300 bg-white"
              placeholder="Username"
            />
            <User
              className="absolute left-3 top-2.5 text-neutral-400"
              size={20}
            />
          </div>
        </div>

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
              placeholder="Email"
            />
            <Mail
              className="absolute left-3 top-2.5 text-neutral-400"
              size={20}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
                focus:ring-2 focus:ring-primary-300 focus:border-primary-300
                pl-10 pr-10 transition-all duration-300 bg-white"
              placeholder="Password"
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

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
                focus:ring-2 focus:ring-primary-300 focus:border-primary-300
                pl-10 pr-10 transition-all duration-300 bg-white"
              placeholder="Confirm password"
            />
            <Lock
              className="absolute left-3 top-2.5 text-neutral-400"
              size={20}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-neutral-400 
                hover:text-neutral-600 transition-colors duration-300"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 text-white py-3 rounded-xl
          hover:bg-primary-700 transition-all duration-300 font-medium
          flex items-center justify-center gap-2 group"
      >
        Create Account
        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
};

export default SignUpForm;
