import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  BookOpen,
  Target,
  GraduationCap,
  Mic2Icon,
  Laptop2Icon,
  PenBoxIcon,
} from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialSection from "./Testimonial/TestimonialSection";
import { Link, useNavigate } from "react-router-dom";
import ajaxCall from "../helpers/ajaxCall";
import Loading from "../components/UI/Loading";

const HomePage = () => {
  const navigate = useNavigate();
  const handleExplorecourses = () => {
    navigate("/courses");
  };
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

  const pteCourses = [
    {
      id: 5,
      title: "PTE Academic Exam Prep",
      icon: "pte",
      duration: "4 weeks",
      level: "All Levels",
      image:
        "http://localhost:3001/static/media/course.519b3df106ae19415253.jpg",
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

  const [courseList, setCouresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await ajaxCall(
          `/courselistview/`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          },
          8000
        );

        if (response.status === 200) {
          setCouresList(
            response.data?.filter(({ course_type }) => course_type === "PUBLIC")
          );
        }
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const getGradientClass = (index) => {
    const gradients = [
      "bg-gradient-to-br from-primary-400 to-primary-600",
      "bg-gradient-to-br from-secondary-400 to-secondary-600",
      "bg-gradient-to-br from-accent-400 to-accent-600",
      "bg-gradient-to-br from-success-400 to-success-600",
    ];
    return gradients[index % gradients.length];
  };

  const formatDuration = (lessons) => {
    if (!lessons || !lessons.length) return "N/A";
    const totalMinutes = lessons.reduce((acc, lesson) => {
      const duration = lesson.Lesson_Duration || "";
      const minutes = parseInt(duration.split(" ")[0]) || 0;
      return acc + minutes;
    }, 0);
    return `${totalMinutes} min`;
  };

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
                Achieve your dream of overseas Education with ESPI.
              </h1>
              <p className="text-primary-100 text-lg">
                Focuses courses to develop your potential to score high.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleExplorecourses}
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
              <div className="w-full md:w-1/2 relative">
                <img
                  src="https://studystreak.in/static/media/about_10.c6fba820cc5e8886a5dd.png"
                  alt="Students studying"
                  className="rounded-2xl shadow-soft"
                />
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
      {isLoading ? (
        <></>
      ) : (
        // <Loading />
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
              {courseList.map((course, index) => (
                <div
                  key={course.id}
                  className="group bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-card hover:shadow-card-hover hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div
                    className={`h-48 relative overflow-hidden ${getGradientClass(
                      index
                    )}`}
                  >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                    <img
                      src={course.Course_Thumbnail}
                      alt={course.Course_Title}
                      className="w-full h-full object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-neutral-800 group-hover:text-primary-600 transition-colors duration-300">
                      {course.Course_Title}
                    </h3>
                    <div className="flex items-center text-sm text-neutral-600 mb-3">
                      <Clock size={16} className="mr-2" />
                      <span>{formatDuration(course.lessons)}</span>
                      <span className="mx-2">•</span>
                      <span>{course.Level?.name || "N/A"}</span>
                    </div>

                    <div className="flex items-center mb-4 pt-3 border-t border-neutral-100">
                      <img
                        src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
                        alt="Instructor"
                        className="w-8 h-8 rounded-full border-2 border-white shadow-soft"
                      />
                      <span className="text-sm text-neutral-600 ml-2">
                        {course.Language?.name || "N/A"}
                      </span>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Link
                        to={`/course/${course.id}`}
                        className="block w-full text-center bg-primary-50 text-primary-600 py-2.5 rounded-xl hover:bg-primary-100 transition-colors duration-300 font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                      src={`${course.image}`}
                      alt={course.title}
                      className="w-full h-full object-cover absolute top-0 left-0 group-hover:scale-110 transition-transform duration-300"
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
            StudyStreak.
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
    </div>
  );
};

export default HomePage;
