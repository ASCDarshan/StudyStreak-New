import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Clock, 
  BarChart, 
  Star, 
  Calendar, 
  ArrowRight,
  BookOpen,
  User,
  Award,
  Target,
  Check
} from 'lucide-react';
import EnglishTest from './EnglishTest';
import BandCalculator from './BandCalculator';  // Add this import





const IELTSPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  // IELTS-specific courses data
  const ieltsModules = ['All', 'Listening', 'Reading', 'Writing', 'Speaking'];
  
  const ieltsCourses = [
    { 
      id: 1, 
      title: 'IELTS Complete Preparation', 
      category: 'All Modules', 
      instructor: 'Dr. Emma Watson', 
      duration: '8 weeks', 
      level: 'All Levels', 
      rating: 4.9, 
      students: 12500, 
      price: 299,
      features: [
        'Comprehensive study material',
        'Practice tests with evaluation',
        'Live classes',
        'One-on-one speaking sessions',
        'Writing task evaluation'
      ]
    },
    { 
      id: 2, 
      title: 'IELTS Speaking Mastery', 
      category: 'Speaking', 
      instructor: 'Prof. Sarah Miller', 
      duration: '4 weeks', 
      level: 'Intermediate', 
      rating: 4.8, 
      students: 8300, 
      price: 149,
      features: [
        'Daily speaking practice',
        'Pronunciation workshops',
        'Mock interviews',
        'Vocabulary building',
        'Accent training'
      ]
    },
    { 
      id: 3, 
      title: 'IELTS Writing Excellence', 
      category: 'Writing', 
      instructor: 'Dr. John Peterson', 
      duration: '6 weeks', 
      level: 'Advanced', 
      rating: 4.9, 
      students: 7200, 
      price: 199,
      features: [
        'Essay writing techniques',
        'Task 1 & 2 strategies',
        'Personal feedback',
        'Sample answers analysis',
        'Grammar improvement'
      ]
    },
    // Add more IELTS courses...
  ];

  const ieltsWebinars = [
    {
      title: 'IELTS Writing Task 2 Masterclass',
      date: '2024-10-15',
      time: '14:00 UTC',
      instructor: 'Dr. Emma Watson',
      description: 'Learn advanced strategies for IELTS Writing Task 2 essays',
      topics: [
        'Essay structure',
        'Time management',
        'Common question types',
        'Scoring criteria'
      ]
    },
    // Add more webinars...
  ];

  const successStories = [
    {
      name: "John Smith",
      score: "8.5",
      country: "India",
      university: "University of Toronto",
      quote: "The IELTS course at StudyStreak helped me achieve my dream score. The personalized feedback was invaluable."
    },
    // Add more success stories...
  ];

  const keyFeatures = [
    {
      title: "Expert Instructors",
      description: "Learn from IELTS experts with proven track records",
      icon: User
    },
    {
      title: "Comprehensive Material",
      description: "Complete study material covering all IELTS modules",
      icon: BookOpen
    },
    {
      title: "Practice Tests",
      description: "Regular mock tests with detailed performance analysis",
      icon: Target
    },
    {
      title: "Band Guarantee",
      description: "Guaranteed band improvement or your money back",
      icon: Award
    }
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6 text-white">
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                #1 Rated IELTS Preparation Course
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Master IELTS with <span className="text-accent-400">Confidence</span>
              </h1>
              <p className="text-lg text-primary-100">
                Comprehensive IELTS preparation designed to help you achieve your target band score. 
                Join thousands of successful students who have achieved their dreams with us.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold">8.5+</div>
                  <div className="text-primary-200 text-sm">Average Band Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15K+</div>
                  <div className="text-primary-200 text-sm">Success Stories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-primary-200 text-sm">Success Rate</div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="bg-white text-primary-600 px-6 py-3 rounded-xl 
                  hover:bg-primary-50 transition-all duration-300 font-medium">
                  Explore Courses
                </button>
                <button className="bg-primary-700 text-white px-6 py-3 rounded-xl 
                  hover:bg-primary-800 transition-all duration-300 font-medium border border-primary-500">
                  Take Free Test
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              {/* Add an IELTS-specific illustration or image here */}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Why Choose Our IELTS Program?
            </h2>
            <p className="text-neutral-600">
              Our comprehensive IELTS preparation program is designed to give you 
              the best possible chance of success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} 
                className="group bg-neutral-50 rounded-2xl p-6 hover:bg-primary-50 
                  transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4 bg-primary-100 w-12 h-12 rounded-xl flex items-center 
                  justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Filter and Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Module Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {ieltsModules.map((module) => (
                <button
                  key={module}
                  onClick={() => setSelectedFilter(module)}
                  className={`px-6 py-2.5 rounded-xl transition-all duration-300 
                    ${selectedFilter === module 
                      ? 'bg-primary-600 text-white shadow-soft' 
                      : 'bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                >
                  {module}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ieltsCourses
              .filter(course => selectedFilter === 'All' || course.category === selectedFilter)
              .map((course) => (
                <div key={course.id} 
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200
                    hover:border-primary-200 shadow-card hover:shadow-card-hover 
                    transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Course Header */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500 to-primary-600 
                    p-6 flex flex-col justify-between">
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm 
                      px-3 py-1 rounded-full text-primary-600 text-sm font-medium">
                      {course.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-auto">
                      {course.title}
                    </h3>
                  </div>

                  {/* Course Content */}
                  <div className="p-6 space-y-6">
                    {/* Instructor & Duration */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center 
                          justify-center text-primary-600 font-bold">
                          {course.instructor.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-800">
                            {course.instructor}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {course.level}
                          </p>
                        </div>
                      </div>
                      <div className="text-sm text-neutral-600">
                        <Clock className="inline-block w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {course.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                          <Check size={16} className="text-primary-600" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Ratings & Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className="text-warning-400 fill-current" 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-neutral-600">
                          ({course.students.toLocaleString()})
                        </span>
                      </div>
                      <span className="text-xl font-bold text-primary-600">
                        ${course.price}
                      </span>
                    </div>

                    {/* CTA Button */}
                    <Link 
                      to={`/course/${course.id}`}
                      className="block w-full text-center bg-primary-600 text-white py-3 
                        rounded-xl hover:bg-primary-700 transition-colors duration-300 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">
                Test Your English Level
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Take our quick assessment to understand your current English proficiency 
                and get personalized course recommendations
              </p>
            </div>
            <EnglishTest />
          </div>
        </div>
      </section>

      {/* Band Score Calculator
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <BandCalculator />
        </div>
      </section> */}


      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">
              Success Stories
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Join thousands of students who have achieved their target IELTS scores with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-6 shadow-card">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center 
                    justify-center text-primary-600 font-bold text-lg">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">{story.name}</h3>
                    <p className="text-sm text-primary-600">
                      Band Score: {story.score}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {story.university}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Resources */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-800 mb-12 text-center">
            Free Study Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Practice Tests', 'Sample Essays', 'Vocabulary Lists', 'Tips & Tricks'].map((resource, index) => (
              <Link 
                key={index}
                to={`/resources/${resource.toLowerCase().replace(' ', '-')}`}
                className="bg-white rounded-xl p-6 text-center hover:bg-primary-50 
                  transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary-100 mx-auto mb-4 
                  flex items-center justify-center group-hover:bg-primary-200 
                  transition-colors duration-300">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-800 mb-2">
                  {resource}
                </h3>
                <p className="text-sm text-neutral-600">
                  Access free {resource.toLowerCase()} to boost your preparation
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your IELTS Journey?
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive IELTS preparation program and take the first step 
            towards achieving your target band score.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl 
              hover:bg-primary-50 transition-all duration-300 font-medium">
              Get Started Now
            </button>
            <button className="bg-primary-700 text-white px-8 py-3 rounded-xl 
              hover:bg-primary-800 transition-all duration-300 font-medium 
              border border-primary-500">
              Schedule Free Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IELTSPage;