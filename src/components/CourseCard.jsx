function CourseCard({ course, onViewDetails }) {
  return (
    <div className="course-card">

      <img
        src={course.image}
        alt={course.name}
      />

      <div className="course-card-content">

        <span className="course-category">
          {course.category}
        </span>

        <h3>
          {course.name}
        </h3>

        <p>
          {course.description}
        </p>

        <div className="course-info">
          <span>⏱ {course.duration}</span>
          <span>₹{course.fee}</span>
        </div>

        <button
          onClick={() => onViewDetails(course)}
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default CourseCard;