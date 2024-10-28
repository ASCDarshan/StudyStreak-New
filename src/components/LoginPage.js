import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, User } from 'lucide-react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col lg:flex-row">
      {/* Left Section - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://studystreak.in/static/media/Logo.d84254f8c0966763bb8d.png" 
              alt="StudyStreak Logo" 
              className="h-30 object-contain"
            />
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-card p-8">
            {/* Form Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-neutral-800 mb-2">
                {isLogin ? 'Welcome Back!' : 'Create Account'}
              </h1>
              <p className="text-neutral-600">
                {isLogin 
                  ? 'Enter your credentials to access your account' 
                  : 'Sign up to get started with StudyStreak'
                }
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex bg-neutral-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300
                  ${isLogin 
                    ? 'bg-white text-primary-600 shadow-soft' 
                    : 'text-neutral-600 hover:text-primary-600'
                  }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-300
                  ${!isLogin 
                    ? 'bg-white text-primary-600 shadow-soft' 
                    : 'text-neutral-600 hover:text-primary-600'
                  }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name - Sign Up only */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-700">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-300
                        focus:ring-2 focus:ring-primary-300 focus:border-primary-300
                        pl-10 transition-all duration-300 bg-white"
                      placeholder="Enter your name"
                    />
                    <User className="absolute left-3 top-2.5 text-neutral-400" size={20} />
                  </div>
                </div>
              )}

              {/* Email */}
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
                  <Mail className="absolute left-3 top-2.5 text-neutral-400" size={20} />
                </div>
              </div>

              {/* Password */}
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
                    placeholder="Enter your password"
                  />
                  <Lock className="absolute left-3 top-2.5 text-neutral-400" size={20} />
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

              {/* Forgot Password - Login only */}
              {isLogin && (
                <div className="flex justify-end">
                  <Link 
                    to="/forgot-password"
                    className="text-sm text-primary-600 hover:text-primary-700 
                      font-medium transition-colors duration-300"
                  >
                    Forgot Password?
                  </Link>
                </div>
              )}

               {/* Submit Button */}
               <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-xl
                  hover:bg-primary-700 transition-all duration-300 font-medium
                  flex items-center justify-center gap-2 group"
              >
                {isLogin ? 'Login' : 'Create Account'}
                <ArrowRight 
                  size={18} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </button>
            </form>

            {/* Social Login Options */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-neutral-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 
                  border border-neutral-300 rounded-xl hover:bg-neutral-50 
                  transition-all duration-300 group">
                  <img 
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900">
                    Continue with Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image/Info */}
      <div className="hidden lg:flex flex-1 bg-primary-600 p-12 items-center justify-center">
        <div className="max-w-lg text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Start Your Journey With StudyStreak
          </h2>
          <p className="text-primary-100 text-lg mb-8">
            Join thousands of students who have achieved their target scores with 
            our expert-led courses and innovative learning techniques.
          </p>
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              ['45k+', 'Active Students'],
              ['95%', 'Success Rate'],
              ['4.9/5', 'Student Rating']
            ].map(([number, label], index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{number}</div>
                <div className="text-primary-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;