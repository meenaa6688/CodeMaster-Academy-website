// import { useState } from "react";
// import { courses } from "../data/mockData";
// import CourseCard from "../components/CourseCard";


// function Courses({ onViewDetails }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const categories = ["All", ...new Set(courses.map((course) => course.category))];

//   const filteredCourses = courses.filter((course) => {
//     const matchesSearch = course.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       selectedCategory === "All" ||
//       course.category === selectedCategory;

//     return matchesSearch && matchesCategory;
//   });

//   return (
//     <div className="courses-page">
//       <h1>Our Courses</h1>

//       <div className="course-filters">
//         <input
//           type="text"
//           placeholder="Search courses..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           {categories.map((category) => (
//             <option key={category} value={category}>
//               {category}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="courses-list">
//         {filteredCourses.map((course) => (
//           <div className="course-card" key={course.id}>
//             <img src={course.image} alt={course.name} />

//             <h2>{course.name}</h2>

//             <p>{course.description}</p>

//             <p>
//               <strong>Duration:</strong> {course.duration}
//             </p>

//             <p>
//               <strong>Level:</strong> {course.level}
//             </p>

//             <button>View Details</button>
//           </div>
//         ))}
//       </div>

//       {filteredCourses.length === 0 && (
//         <p>No courses found.</p>
//       )}
//     </div>
//   );
// }

// export default Courses;


import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses({ onViewDetails }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="courses-page">

      {/* PAGE HEADING */}

      <div className="courses-page-heading">

        <span>OUR COURSES</span>

        <h1>Explore Our Courses</h1>

        <p>
          Learn in-demand technologies through
          practical, industry-focused training.
        </p>

      </div>


      {/* SEARCH AND FILTER */}

      <div className="course-filters">

        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

      </div>


      {/* RESULT COUNT */}

      <div className="courses-result">

        <p>
          Showing <strong>{filteredCourses.length}</strong>{" "}
          {filteredCourses.length === 1
            ? "course"
            : "courses"}
        </p>

      </div>


      {/* COURSE CARDS */}

      {filteredCourses.length > 0 ? (

        <div className="courses-grid">

          {filteredCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onViewDetails}
            />

          ))}

        </div>

      ) : (

        <div className="no-courses">

          <h3>No courses found</h3>

          <p>
            Try changing your search or category filter.
          </p>

        </div>

      )}

    </main>
  );
}

export default Courses;