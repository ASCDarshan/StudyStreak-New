import React, { useState } from "react";
import {
  Search,
  User,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Calendar,
  BookOpen,
  Target,
  GraduationCap,
  Mic2Icon,
  Laptop2Icon,
  ExpandIcon,
  TestTube2Icon,
  PenBoxIcon,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialSection from "./TestimonialSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  // const navigationItems = [
  //     { name: 'Home', path: '/' },
  //     { name: 'Courses', path: '/courses' },
  //     { name: 'About Us', path: '/about-us' },
  //     { name: 'Why Choose Us', path: '/why-choose-us' },
  //     { name: 'Blogs', path: '/blogs' },
  //     { name: 'Talk to Us', path: '/talk-to-us' },
  //     { name: 'Become a Partner', path: '/become-a-partner' },
  //   ];
  const features = [
    {
      title: "All Major Test Preparations",
      description: "IELTS, GRE, GMAT, TOEFL, PTE",
      icon: BookOpen,
      iconBgColor: "bg-primary-50",
      iconColor: "text-primary-500",
    },
    {
      title: "Expert Instruction",
      description: "Learn from certified professionals",
      icon: GraduationCap,
      iconBgColor: "bg-secondary-50",
      iconColor: "text-secondary-500",
    },
    {
      title: "Guaranteed Results",
      description: "Improve your scores and Get your Dream Admission",
      icon: Target,
      iconColor: "text-accent-500",
      iconBgColor: "bg-accent-50",
    },
    {
      title: "Live Practice Sessions",
      description: "Improve your scores with Daily Practice with Our Experts",
      icon: Mic2Icon,
      iconColor: "text-accent-500",
      iconBgColor: "bg-accent-50",
    },
    {
      title: "Live Classes",
      description: "Learn about each Topic indepth with Our Experts",
      icon: Laptop2Icon,
      iconColor: "text-accent-500",
      iconBgColor: "bg-accent-50",
    },
    {
      title: "More than 100 Tests to Practice from",
      description: "Learn about each Topic indepth with Our Experts",
      icon: PenBoxIcon,
      iconColor: "text-accent-500",
      iconBgColor: "bg-accent-50",
    },
  ];
  const examCourses = [
    {
      id: 1,
      title: "IELTS Mastery Course",
      icon: "ielts",
      duration: "6 weeks",
      level: "All Levels",
      rating: 4.9,
      reviews: 12500,
      instructor: "Dr. Emma Watson",
    },
    {
      id: 2,
      title: "GRE Comprehensive Prep",
      icon: "gre",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.8,
      reviews: 10300,
      instructor: "Prof. Robert Chen",
    },
    {
      id: 3,
      title: "GMAT Intensive Program",
      icon: "gmat",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      reviews: 9200,
      instructor: "Sarah Johnson, MBA",
    },
    {
      id: 4,
      title: "TOEFL iBT Success Course",
      icon: "toefl",
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.9,
      reviews: 11400,
      instructor: "Michael Brown, PhD",
    },
  ];

  const pteCourses = [
    {
      id: 5,
      title: "PTE Academic Exam Prep",
      icon: "pte",
      duration: "4 weeks",
      level: "All Levels",
    },
    {
      id: 6,
      title: "PTE Speaking Mastery",
      icon: "pte-speaking",
      duration: "2 weeks",
      level: "Intermediate",
    },
    {
      id: 7,
      title: "PTE Writing Skills",
      icon: "pte-writing",
      duration: "2 weeks",
      level: "Advanced",
    },
    {
      id: 8,
      title: "PTE Reading Techniques",
      icon: "pte-reading",
      duration: "2 weeks",
      level: "Beginner",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      exam: "IELTS",
      score: "8.5",
      quote:
        "STUDYSTREAK helped me achieve my dream score in IELTS. The instructors were fantastic!",
    },
    {
      name: "Jane Smith",
      exam: "GRE",
      score: "335",
      quote:
        "I couldn't have scored so high on the GRE without STUDYSTREAK's comprehensive program.",
    },
    {
      name: "Alex Johnson",
      exam: "GMAT",
      score: "760",
      quote:
        "The GMAT course was intense but extremely effective. Highly recommended!",
    },
  ];

  const upcomingWebinars = [
    {
      title: "IELTS Writing Task 2 Strategies",
      date: "2024-10-15",
      time: "14:00 UTC",
      instructor: "Dr. Emma Watson",
    },
    {
      title: "GRE Quantitative Reasoning Tips",
      date: "2024-10-18",
      time: "18:00 UTC",
      instructor: "Prof. Robert Chen",
    },
    {
      title: "TOEFL Speaking Section Mastery",
      date: "2024-10-20",
      time: "16:00 UTC",
      instructor: "Michael Brown, PhD",
    },
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ace Your Exams with
                <span className="text-accent-300"> STUDYSTREAK</span>
              </h1>
              <p className="text-primary-100 text-lg">
                Expert-led courses for IELTS, GRE, GMAT, TOEFL, and PTE.
                Designed for ambitious students aiming for top scores.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl 
                  shadow-soft hover:shadow-hover transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Courses
                </button>
                <button
                  className="bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-xl 
                  border border-primary-500 hover:border-primary-600 transition-all duration-300"
                >
                  Free Practice Test
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="/api/placeholder/600/400"
                  alt="Students studying"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-primary-900/20 backdrop-blur-sm"></div>
              </div>
              {/* Floating Achievement Card */}
              <div
                className="absolute -left-4 top-1/4 bg-white p-4 rounded-xl shadow-elevated 
                transform hover:-translate-y-1 transition-all duration-300 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-success-100 p-2 rounded-lg">
                    <Star className="text-success-500" size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-800">
                      95% Success Rate
                    </div>
                    <div className="text-xs text-neutral-500">
                      Last 12 months
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 border border-neutral-200 shadow-card
                hover:shadow-card-hover hover:border-primary-200 transition-all duration-300
                transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`${feature.iconBgColor} p-3 rounded-xl 
                    group-hover:scale-110 transition-all duration-300`}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${feature.iconColor}`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-lg text-neutral-800 
                      group-hover:text-primary-600 transition-colors duration-300"
                      >
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Exam Courses Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                Popular Exam Courses
              </h2>
              <p className="text-neutral-600 mt-2">
                Choose from our highly-rated exam preparation courses
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-xl
              hover:bg-primary-100 transition-colors duration-300 group"
            >
              View All Courses
              <ChevronRight
                className="ml-2 transform group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {examCourses.map((course, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-neutral-200
                shadow-card hover:shadow-card-hover hover:border-primary-200
                transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`h-48 relative overflow-hidden ${
                    [
                      "bg-gradient-to-br from-primary-400 to-primary-600",
                      "bg-gradient-to-br from-secondary-400 to-secondary-600",
                      "bg-gradient-to-br from-accent-400 to-accent-600",
                      "bg-gradient-to-br from-success-400 to-success-600",
                    ][index]
                  }`}
                >
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                  <img
                    src={`/${course.icon}-icon.svg`}
                    alt={course.title}
                    className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="font-semibold text-lg mb-3 text-neutral-800 group-hover:text-primary-600 
                    transition-colors duration-300"
                  >
                    {course.title}
                  </h3>
                  <div className="flex items-center text-sm text-neutral-600 mb-3">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.level}</span>
                  </div>

                  <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(course.rating)
                              ? "text-warning-400 fill-current"
                              : "text-neutral-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-neutral-700">
                      {course.rating}
                    </span>
                    <span className="text-sm text-neutral-500 ml-2">
                      ({course.reviews.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center mb-4 pt-3 border-t border-neutral-100">
                    <img
                      src={`/instructor-${index + 1}.jpg`}
                      alt={course.instructor}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-soft"
                    />
                    <span className="text-sm text-neutral-600 ml-2">
                      {course.instructor}
                    </span>
                  </div>

                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full text-center bg-primary-50 text-primary-600 py-2.5 rounded-xl
                    hover:bg-primary-100 transition-colors duration-300 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with Part 2... */}

      {/* PTE Courses Section */}
      <section className="py-12 md:py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
                PTE Academic Courses
              </h2>
              <p className="text-neutral-600 mt-2">
                Specialized courses for PTE success
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                className="p-2 rounded-full bg-white border border-neutral-200 hover:bg-primary-50 
                hover:border-primary-200 transition-colors duration-300 group shadow-soft hover:shadow-hover"
              >
                <ChevronLeft
                  size={20}
                  className="text-neutral-600 group-hover:text-primary-600"
                />
              </button>
              <button
                className="p-2 rounded-full bg-white border border-neutral-200 hover:bg-primary-50 
                hover:border-primary-200 transition-colors duration-300 group shadow-soft hover:shadow-hover"
              >
                <ChevronRight
                  size={20}
                  className="text-neutral-600 group-hover:text-primary-600"
                />
              </button>
            </div>
          </div>

          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            className="pte-carousel"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pteCourses.map((course, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden border border-neutral-200 
                  shadow-card hover:shadow-card-hover hover:border-primary-200 
                  transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div
                    className={`h-48 relative overflow-hidden ${
                      [
                        "bg-gradient-to-br from-primary-400 to-primary-600",
                        "bg-gradient-to-br from-accent-400 to-accent-600",
                        "bg-gradient-to-br from-secondary-400 to-secondary-600",
                        "bg-gradient-to-br from-success-400 to-success-600",
                      ][index]
                    }`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <img
                      src={`/${course.icon}-icon.svg`}
                      alt={course.title}
                      className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3
                      className="font-semibold text-lg mb-3 text-neutral-800 group-hover:text-primary-600 
                      transition-colors duration-300"
                    >
                      {course.title}
                    </h3>
                    <div className="flex items-center text-sm text-neutral-600 mb-4">
                      <Clock size={16} className="mr-2" />
                      <span>{course.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{course.level}</span>
                    </div>
                    <Link
                      to={`/course/${course.id}`}
                      className="block w-full text-center bg-primary-50 text-primary-600 py-2.5 rounded-xl
                      hover:bg-primary-100 transition-colors duration-300 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Webinars Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-3">
              Upcoming Free Webinars
            </h2>
            <p className="text-neutral-600">
              Join our expert instructors for free learning sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl border border-neutral-200 overflow-hidden
                shadow-card hover:shadow-card-hover hover:border-primary-200 
                transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="bg-primary-50 rounded-lg p-3 mb-4 w-fit">
                    <Clock size={24} className="text-primary-500" />
                  </div>
                  <h3
                    className="font-semibold text-xl mb-3 text-neutral-800 group-hover:text-primary-600 
                    transition-colors duration-300"
                  >
                    {webinar.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    <span className="font-medium">Instructor:</span>{" "}
                    {webinar.instructor}
                  </p>
                  <div className="flex items-center text-sm text-neutral-600 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>
                      {new Date(webinar.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600 mb-6">
                    <Clock size={16} className="mr-2" />
                    <span>{webinar.time}</span>
                  </div>
                  <button
                    className="w-full bg-primary-600 text-white py-3 rounded-xl
                    hover:bg-primary-700 transition-colors duration-300 font-medium
                    shadow-soft hover:shadow-hover transform hover:-translate-y-0.5"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have achieved their dream scores with
            STUDYSTREAK.
          </p>
          <button
            className="bg-white text-primary-600 px-8 py-3 rounded-xl hover:bg-primary-50
            transition-all duration-300 font-semibold shadow-elevated hover:shadow-hover
            transform hover:-translate-y-0.5"
          >
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">About STUDYSTREAK</h3>
              <p className="text-neutral-400 leading-relaxed">
                Empowering students worldwide to achieve their academic goals
                through expert-led courses and innovative learning techniques.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Exams We Cover</h3>
              <ul className="space-y-2">
                {["IELTS", "GRE", "GMAT", "TOEFL", "PTE Academic"].map(
                  (exam, index) => (
                    <li key={index}>
                      <Link
                        to={`/courses/${exam.toLowerCase()}`}
                        className="text-neutral-400 hover:text-white transition-colors duration-300"
                      >
                        {exam}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  ["Home", "/"],
                  ["Courses", "/courses"],
                  ["About Us", "/about-us"],
                  ["Contact", "/contact"],
                  ["Blog", "/blog"],
                ].map(([name, path], index) => (
                  <li key={index}>
                    <Link
                      to={path}
                      className="text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <div className="space-y-2 text-neutral-400">
                <p>1234 Study Street, Learn City, ED 5678</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: info@studystreak.com</p>
              </div>

              <div className="flex space-x-4 pt-4">
                {["facebook", "twitter", "linkedin"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-neutral-400 hover:text-white transition-colors duration-300 
                    transform hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      {/* SVG paths remain the same */}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
            <p>© 2024 STUDYSTREAK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
