import { useEffect, useState } from "react";
export default function Hero() {
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const jobs = [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Scientist",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 3000); // Change job every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen pt-[80px]">
      <div className="absolute bottom-36 w-full flex flex-col items-center">
        <h1 className="text-6xl text-gray-500 font-medium fade-in-up">
          Interview Prep{" "}
          <span className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
            Boost
          </span>
        </h1>
        <p className="mt-16 text-xl text-gray-700 fade-in-up">
          Your Quick Path to Interview Readiness in
        </p>
        <span className="job-title-animation text-xl mt-3 text-blue-800 bg-blue-100 px-2 py-1">
          {jobs[currentJobIndex]}
        </span>
        <p className="mt-10 text-xl w-[620px] text-center text-gray-700 fade-in-up">
          Practice key questions, get insights about your answers, and get more
          comfortable interviewing.
        </p>
        <button className="mt-10 bg-blue-500 text-white text-xl font-semibold px-8 py-4 rounded-xl hover:shadow-2xl transition-all active:bg-blue-700 fade-in-up">
          Start practicing
        </button>
      </div>
    </div>
  );
}
