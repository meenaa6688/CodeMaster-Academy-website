function Header() {
  return (
    <header className="header">

      <div className="logo">
        <span>◆</span> CodeMaster Academy
      </div>

      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#trainers">Trainers</a>
        <a href="#batches">Batches</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="header-button">
        Enquire Now
      </button>

    </header>
  );
}

export default Header;