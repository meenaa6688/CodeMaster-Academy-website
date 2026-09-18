// function Header() {
//   return (
//     <header className="header">

//       <div className="logo">
//         <span>◆</span> CodeMaster Academy
//       </div>

//       <nav className="nav">
//         <a href="#home">Home</a>
//         <a href="#courses">Courses</a>
//         <a href="#trainers">Trainers</a>
//         <a href="#batches">Batches</a>
//         <a href="#contact">Contact</a>
//       </nav>

//       <button className="header-button">
//         Enquire Now
//       </button>

//     </header>
//   );
// }

// export default Header;

function Header({ onHomeClick, onCoursesClick }) {
  return (
    <header className="header">

      <div
        className="logo"
        onClick={onHomeClick}
        style={{ cursor: "pointer" }}
      >
        <span>◆</span> CodeMaster Academy
      </div>

      <nav className="nav">

        <button
          className="nav-link"
          onClick={onHomeClick}
        >
          Home
        </button>

        <button
          className="nav-link"
          onClick={onCoursesClick}
        >
          Courses
        </button>

        <button
          className="nav-link"
          onClick={() => {
            onHomeClick();
            setTimeout(() => {
              document
                .getElementById("trainers")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }}
        >
          Trainers
        </button>

        <button
          className="nav-link"
          onClick={() => {
            onHomeClick();
            setTimeout(() => {
              document
                .getElementById("batches")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }}
        >
          Batches
        </button>

        <button
          className="nav-link"
          onClick={() => {
            onHomeClick();
            setTimeout(() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }}
        >
          Contact
        </button>

      </nav>

      <button className="header-button">
        Enquire Now
      </button>

    </header>
  );
}

export default Header;