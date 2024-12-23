import React, { useState, useEffect } from "react";
import {
  Clock,
  Calendar,
  ChevronDown,
  ChevronUp,
  Users,
  Globe,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import { toast } from "react-toastify";
import ajaxCall from "../../helpers/ajaxCall";
import { useSelector } from "react-redux";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";
import PackageDetails from "./PackageDetails";

const CourseDetailPage = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const { checkAuth } = useCheckAuth();
  const authData = useSelector((state) => state.authStore);
  const [courseDetail, setCourseDetail] = useState();
  const [batchData, setBatchData] = useState([]);
  const [coursePackages, setCoursePackages] = useState();
  const [openSection, setOpenSection] = useState(
    "Section 1: Introduction to IELTS"
  );
  const packageIds = coursePackages?.packages?.map((item) => item?.package_id);
  console.log(courseDetail);
  const batches = batchData.filter((batch) =>
    packageIds?.includes(batch?.add_package?.id)
  );

  useEffect(() => {
    checkAuth();
  }, [authData, checkAuth]);

  useEffect(() => {
    (async () => {
      if (!courseId || isNaN(courseId)) {
        toast.error("Please select a valid course");
        navigate("/");
        return;
      }
      try {
        const response = await ajaxCall(
          `/courseretupddel/${courseId}/`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PATCH",
          },
          8000
        );
        if (response.status === 200) {
          const section = [];
          response.data?.lessons?.forEach((lesson) => {
            const isSessionExist = section.find(
              (item) => item.id === lesson?.section.id
            );
            if (!isSessionExist) {
              section.push(lesson?.section);
            }
          });
          const updatedData = {
            ...response.data,
            section,
          };
          section.forEach((sectionItem) => {
            const lessons = response.data?.lessons?.filter(
              (lesson) => lesson?.section.id === sectionItem.id
            );
            sectionItem.lessons = lessons;
          });
          setCourseDetail(updatedData);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [courseId, navigate]);

  useEffect(() => {
    (async () => {
      if (!courseId || isNaN(courseId)) {
        toast.error("Please select a valid course");
        navigate("/");
        return;
      }
      try {
        const response = await ajaxCall(
          `/course/${courseId}/packages/`,
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
          setCoursePackages(response.data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [courseId, navigate]);
  useEffect(() => {
    (async () => {
      try {
        const response = await ajaxCall(
          "/batchview/",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "GET",
          },
          8000
        );

        if (response?.status === 200) {
          setBatchData(response?.data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  const startDate = courseDetail?.EnrollmentStartDate
    ? moment(courseDetail?.EnrollmentStartDate).format("DD-MMM-YYYY")
    : "";

  const endDate = courseDetail?.EnrollmentEndDate
    ? moment(courseDetail?.EnrollmentEndDate).format("DD-MMM-YYYY")
    : "";

  return (
    <div className="bg-neutral-50 min-h-screen relative">
      {/* Course Banner */}
      <div
        className="relative h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${courseDetail?.Course_Thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-primary-900/50"></div>
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div
                className="text-primary-100 mb-4 inline-flex items-center 
                bg-primary-800/30 rounded-full px-4 py-1"
              >
                {courseDetail?.Category?.name}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {courseDetail?.Course_Title}
              </h1>
              <p className="text-primary-100 text-lg mb-8 max-w-2xl">
                <div
                  dangerouslySetInnerHTML={{
                    __html: courseDetail?.Short_Description,
                  }}
                ></div>
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center text-white">
                  <Users size={20} className="mr-2" />
                  <span>
                    Max Enrollment : {courseDetail?.max_enrollments || 0}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Course Information */}
        <div className="bg-white rounded-2xl shadow-card border border-neutral-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8">
            Course Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-50 p-3 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Instructor</p>
                  <p className="text-neutral-800 font-medium">
                    {courseDetail?.primary_instructor?.username}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-secondary-50 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-secondary-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Course Level</p>
                  <p className="text-neutral-800 font-medium">
                    {courseDetail?.Level?.name}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent-50 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">
                    {" "}
                    Batch Start Time :{" "}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {batches.map(({ batch_start_timing }) => (
                      <span className="bg-accent-50 text-accent-600 px-3 py-1 rounded-lg text-sm">
                        {moment(batch_start_timing, "HH:mm:ss").format(
                          "hh:mm A"
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-success-50 p-3 rounded-xl">
                  <Calendar className="w-6 h-6 text-success-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Duration</p>
                  <p className="text-neutral-800 font-medium">
                    {startDate} - {endDate}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-warning-50 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-warning-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Batch Type</p>
                  {batches?.map(({ batch_name }) => {
                    return (
                      <p className="text-neutral-800 font-medium">
                        {batch_name}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-error-50 p-3 rounded-xl">
                  <Globe className="w-6 h-6 text-error-500" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Language</p>
                  <p className="text-neutral-800 font-medium">
                    {courseDetail?.Language?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packages */}
        {coursePackages?.packages?.length >= 1 ? (
          <PackageDetails
            packages={coursePackages?.packages}
            courseId={courseId}
            courseName={courseDetail?.Course_Title}
            courseType={courseDetail?.course_delivery}
          />
        ) : (
          <div>
            <h5 className="text-danger sp_20 col--30">
              No Packages Available For This Course !!
            </h5>
          </div>
        )}

        {/* Curriculum Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-8">
            Course Curriculum
          </h2>
          <div className="bg-white rounded-2xl shadow-card border border-neutral-200 overflow-hidden">
            {courseDetail?.section?.length > 0 ? (
              courseDetail.section
                .sort((a, b) => {
                  const nameA = a?.name?.toLowerCase();
                  const nameB = b?.name?.toLowerCase();
                  if (nameA < nameB) return -1;
                  if (nameA > nameB) return 1;
                  return 0;
                })
                .map((sectionItem, index) => (
                  <div
                    key={index}
                    className="border-b border-neutral-200 last:border-b-0"
                  >
                    <button
                      className="flex justify-between items-center w-full p-6 hover:bg-primary-50 
                            transition-colors duration-300 text-left"
                      onClick={() =>
                        setOpenSection(
                          openSection === sectionItem.name
                            ? null
                            : sectionItem.name
                        )
                      }
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-lg mr-4 flex items-center justify-center
                        ${
                          openSection === sectionItem.name
                            ? "bg-primary-100 text-primary-600"
                            : "bg-neutral-100 text-neutral-600"
                        }`}
                        >
                          {index + 1}
                        </div>
                        <span className="font-medium text-neutral-800">
                          {sectionItem.name}
                        </span>
                      </div>
                      {openSection === sectionItem.name ? (
                        <ChevronUp
                          className={`w-5 h-5 transform transition-transform duration-300 
                        ${
                          openSection === sectionItem.name
                            ? "text-primary-600"
                            : "text-neutral-400"
                        }`}
                        />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-400" />
                      )}
                    </button>
                    {openSection === sectionItem.name && (
                      <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200">
                        <ul className="space-y-3">
                          {sectionItem.lessons
                            ?.sort((a, b) => {
                              const lessonA = parseInt(
                                a?.Lesson_Title.match(/\d+/)?.[0]
                              );
                              const lessonB = parseInt(
                                b?.Lesson_Title.match(/\d+/)?.[0]
                              );
                              return lessonA - lessonB;
                            })
                            .map((lessonItem, i) => (
                              <li
                                key={i}
                                className="flex items-center justify-between text-neutral-600"
                              >
                                <div className="flex items-center">
                                  <div className="w-2 h-2 rounded-full bg-primary-300 mr-3"></div>
                                  <span>{lessonItem.Lesson_Title}</span>
                                </div>
                                <span className="text-neutral-400">
                                  <svg
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 15v2m0 0v2m0-2h2m-2 0H8"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))
            ) : (
              <div className="p-6 text-center text-neutral-600">
                No curriculum available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
