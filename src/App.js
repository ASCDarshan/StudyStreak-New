import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import AboutUsPage from './components/AboutUsPage';
import WhyChooseUsPage from './components/WhyChooseUsPage';
import BlogsPage from './components/BlogsPage';
import TalkToUsPage from './components/TalkToUsPage';
import BecomeAPartnerPage from './components/BecomeAPartnerPage';
import CourseDetailPage from './components/CourseDetailPage';
import LoginPage from './components/LoginPage';
import IELTSCoursePage from './components/IELTSCoursePage';
import EnglishTest from './components/EnglishTest';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/ielts" element={<IELTSCoursePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/talk-to-us" element={<TalkToUsPage />} />
          <Route path="/become-a-partner" element={<BecomeAPartnerPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/english-test" element={<EnglishTest />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;