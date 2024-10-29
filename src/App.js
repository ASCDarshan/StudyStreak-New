import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage";
import CoursesPage from "./components/Course/CoursesPage";
import AboutUsPage from "./components/AboutUs/AboutUsPage";
import WhyChooseUsPage from "./components/WhyChooseUs/WhyChooseUsPage";
import BlogsPage from "./components/Blog/BlogsPage";
import TalkToUsPage from "./components/ContactUs/TalkToUsPage";
import BecomeAPartnerPage from "./components/BecomePartner/BecomeAPartnerPage";
import CourseDetailPage from "./components/Course/CourseDetailPage";
import IELTSCoursePage from "./components/Ielts/IELTSCoursePage";
import EnglishTest from "./components/EnglishTest/EnglishTest";
import TidioChat from "./components/ChatBot/TidioChat";
import AuthPage from "./components/Login/AuthPage";
import BlogDetails from "./components/Blog/BlogDetail";
import IeltsCourseDetail from "./components/Ielts/IeltsCourseDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Layout>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="/ielts" element={<IELTSCoursePage />} />
        <Route path="/ielts/:id" element={<IeltsCourseDetail />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/talk-to-us" element={<TalkToUsPage />} />
        <Route path="/become-a-partner" element={<BecomeAPartnerPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/english-test" element={<EnglishTest />} />
      </Routes>
      <TidioChat />
    </Layout>
  );
}

export default App;
