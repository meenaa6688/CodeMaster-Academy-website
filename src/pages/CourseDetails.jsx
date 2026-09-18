function CourseDetails({ course, onBack, onEnroll }) {
  if (!course) {
    return (
      <div className="course-details-page">
        <h2>Course not found</h2>
        <button onClick={onBack}>Back to Courses</button>
      </div>
    );
  }

  return (
    <div className="course-details-page">

      {/* Back Button */}
      <button className="back-button" onClick={onBack}>
        ← Back to Courses
      </button>

      {/* Course Hero */}
      <div className="course-details-card">

        <div className="course-details-image">
          <img
            src={course.image}
            alt={course.name}
          />
        </div>

        <div className="course-details-content">

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.name}</h1>

          <p className="course-details-description">
            {course.description}
          </p>

          <div className="course-details-info">

            <div>
              <span>Duration</span>
              <strong>{course.duration}</strong>
            </div>

            <div>
              <span>Level</span>
              <strong>{course.level}</strong>
            </div>

            <div>
              <span>Course Fee</span>
              <strong>₹{course.fee}</strong>
            </div>

          </div>

          {/* <button
            className="enroll-button"
            onClick={() => onEnroll(course)}
          >
            Enroll Now
          </button> */}
          
          <button
            className="primary-button"
            onClick={() => alert("Enrollment feature coming soon!")}
          >
            Enroll Now
          </button>

        </div>

      </div>

      {/* What You'll Learn */}
      <div className="course-details-section">

        <h2>What You'll Learn</h2>

        <div className="learning-grid">

          <div>✓ Build practical skills</div>
          <div>✓ Work on real-world projects</div>
          <div>✓ Understand industry concepts</div>
          <div>✓ Improve problem-solving skills</div>
          <div>✓ Learn through practical exercises</div>
          <div>✓ Prepare for technical interviews</div>

        </div>

      </div>

      {/* Course Syllabus */}
      <div className="course-details-section">

        <h2>Course Syllabus</h2>

        <div className="syllabus-list">

          <div className="syllabus-item">
            <strong>Module 1</strong>
            <span>Introduction and Fundamentals</span>
          </div>

          <div className="syllabus-item">
            <strong>Module 2</strong>
            <span>Core Concepts</span>
          </div>

          <div className="syllabus-item">
            <strong>Module 3</strong>
            <span>Practical Implementation</span>
          </div>

          <div className="syllabus-item">
            <strong>Module 4</strong>
            <span>Real-World Project</span>
          </div>

          <div className="syllabus-item">
            <strong>Module 5</strong>
            <span>Final Assessment</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CourseDetails;

