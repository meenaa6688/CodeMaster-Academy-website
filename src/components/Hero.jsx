function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-label">
          BUILD YOUR FUTURE WITH TECHNOLOGY
        </p>

        <h1>
          Learn. Build.
          <br />
          Grow Your Career.
        </h1>

        <p className="hero-description">
          Industry-focused software training with
          experienced trainers, practical projects,
          and flexible learning options.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-button"
            onClick={() =>
              document
                .getElementById("courses")
                ?.scrollIntoView({
                  behavior: "smooth"
                })
            }
          >
            Explore Courses
          </button>

          <button className="secondary-button">
            Contact Us
          </button>

        </div>

      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900"
          alt="Software training classroom"
        />
      </div>

    </section>
  );
}

export default Hero;