import { useEffect, useState } from "react";

// import {
//   courses,
//   trainers,
//   batches
// } from "../data/mockData";

import { courses } from "../data/courses";
import { trainers } from "../data/trainers";
// import { batches } from "../data/batches";

import { api } from "../services/api";

import Hero from "../components/Hero";
import CourseCard from "../components/CourseCard";
import TrainerCard from "../components/TrainerCard";
import BatchCard from "../components/BatchCard";
import EnquiryForm from "../components/EnquiryForm";

function Home() {

  const [selectedCourse, setSelectedCourse] =
    useState(null);
  const [selectedTrainer, setSelectedTrainer] =
    useState(null);
  const [selectedBatch, setSelectedBatch] = 
    useState(null);

  const [ batches, setBatches] = useState([]);
  const [loadingBatches, setLoadingBatches] = useState(true);
  const [batchError, setBatchError] = useState("");

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const data = await api.getBatches();
        setBatches(data);
      } catch (error) {
        console.error(" Error fetching batches:" , error);
        setBatchError("Failed to load upcoming batches");
      } finally {
        setLoadingBatches(false);
      }
    };
    fetchBatches();
  }, []);


  return (
    <main>

      <Hero />

      {/* COURSES */}

      <section
        className="section"
        id="courses"
      >

        <div className="section-heading">

          <span>OUR PROGRAMS</span>

          <h2>
            Popular Software Courses
          </h2>

          <p>
            Learn in-demand technologies
            through practical training.
          </p>

        </div>

        <div className="courses-grid">

          {courses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={setSelectedCourse}
            />

          ))}

        </div>

      </section>


      {/* TRAINERS */}

      <section
        className="section trainers-section"
        id="trainers"
      >

        <div className="section-heading">

          <span>OUR TRAINERS</span>

          <h2>
            Learn From Experienced Trainers
          </h2>

          <p>
            Industry professionals with
            real-world development experience.
          </p>

        </div>

        <div className="trainers-grid">

          {trainers.map((trainer) => (

            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onViewDetails={setSelectedTrainer}
            />

          ))}

        </div>

      </section>


      {/* BATCHES */}

      <section
        className="section"
        id="batches"
      >

        <div className="section-heading">

          <span>UPCOMING BATCHES</span>

          <h2>
            Choose Your Class Timing
          </h2>

          <p>
            Flexible online and offline batches.
          </p>

        </div>

        {/* new code*/}
        {loadingBatches && (
          <p>Loading upcoming batches...</p>
        )}

        {!loadingBatches && !batchError && (
          <div className="batches-grid">
            {batches.map((batch) => (
              <BatchCard
                   key={batch.id}
                   batch={batch}
                   onEnquire={() => {
                     setSelectedBatch(batch);

                      setTimeout(() => {
                        document
                        .getElementById("enquiry")
                        ?.scrollIntoView({
                        behavior: "smooth",
                  });
                }, 0);
               }}
             />
              ))}
              </div>
        )}
              </section>

        

        

          

            {/* // <BatchCard
            //   key={batch.id}
            //   batch={batch}
            //   onEnquire={() => {
            //     alert(
            //       `You selected the ${batch.course} batch.\n\nTrainer: ${batch.trainer}\nDate: ${batch.startDate}\nTime: ${batch.timing}\nMode: ${batch.mode}`
            //          );
            //   }}
            // /> */}
               


      

      <EnquiryForm  selectedBatch={selectedBatch}/>  


      {/* COURSE DETAILS POPUP */}

      {selectedCourse && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >

          <div
            className="modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="close-button"
              onClick={() =>
                setSelectedCourse(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
            />

            <div className="modal-body">

              <span>
                {selectedCourse.category}
              </span>

              <h2>
                {selectedCourse.name}
              </h2>

              <p>
                {selectedCourse.description}
              </p>

              <div className="modal-info">

                <div>
                  <strong>Duration</strong>
                  <span>
                    {selectedCourse.duration}
                  </span>
                </div>

                <div>
                  <strong>Mode</strong>
                  <span>
                    {selectedCourse.mode}
                  </span>
                </div>

                <div>
                  <strong>Level</strong>
                  <span>
                    {selectedCourse.level}
                  </span>
                </div>

                <div>
                  <strong>Fee</strong>
                  <span>
                    ₹{selectedCourse.fee}
                  </span>
                </div>

              </div>

              {/* <button className="primary-button">
                Enquire For This Course
              </button> */}

              <button className="primary-button"
                       onClick={() =>
                          alert(
                              `Thank you for your interest in ${selectedCourse.name}!\n\nOur team will contact you soon regarding this course.`
                             )
                          }
              >
                Enquire For This Course
              </button>

            </div>

          </div>

        </div>

      )}

      {/* TRAINER DETAILS POPUP */}

{selectedTrainer && (

  <div
    className="modal-overlay"
    onClick={() => setSelectedTrainer(null)}
  >

    <div
      className="modal"
      onClick={(event) =>
        event.stopPropagation()
      }
    >

      <button
        className="close-button"
        onClick={() =>
          setSelectedTrainer(null)
        }
      >
        ✕
      </button>

      <img
        src={selectedTrainer.image}
        alt={selectedTrainer.name}
      />

      <div className="modal-body">

        <span>
          Trainer
        </span>

        <h2>
          {selectedTrainer.name}
        </h2>

        <p>
          {selectedTrainer.designation}
        </p>

        <p>
          {selectedTrainer.experience}
        </p>

        <p>
          Specialization: {selectedTrainer.specialization}
        </p>

        <button
          className="primary-button"
          onClick={() =>
            setSelectedTrainer(null)
          }
        >
          Close
        </button>

      </div>

    </div>

  </div>

)}


    </main>
  );
}

export default Home;