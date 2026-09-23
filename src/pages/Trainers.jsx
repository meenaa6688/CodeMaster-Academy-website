// import { useEffect, useState } from "react";
// import { api } from "../services/api";
// import TrainerCard from "../components/TrainerCard";

// function Trainers() {
//   const [trainers, setTrainers] = useState([]);
//   const [selectedTrainer , setSelectedTrainer] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const data = await api.getTrainers();
//         setTrainers(data);
//       } catch (error) {
//         console.error("Error fetching trainers:", error);
//         setError("Failed to load trainers");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrainers();
//   }, []);

//   const handleViewDetails = (trainer) => {
//     setSelectedTrainer(trainer);
//   };

//   const handleClosemodel = () => {
//     setSelectedTrainer(null);
//   };

//   if (loading) {
//     return (
//       <section className="trainers-page">
//         <h2>Our Trainers</h2>
//         <p>Loading trainers...</p>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="trainers-page">
//         <h2>Our Trainers</h2>
//         <p>{error}</p>
//       </section>
//     );
//   }

//   return (
//     <section className="trainers-page">
//       <div className="trainers-header">
//         <h2>Our Trainers</h2>
//         <p>
//           Learn from experienced trainers and industry professionals.
//         </p>
//       </div>

//       <div className="trainers-grid">
//         {trainers.map((trainer) => (
//           <div className="trainer-card" key={trainer.id}>
//             {trainer.image && (
//               <img
//                 src={trainer.image}
//                 alt={trainer.name}
//                 className="trainer-image"
//               />
//             )}

//             <div className="trainer-card-content">
//               <h3>{trainer.name}</h3>

//               <p>
//                 <strong>{trainer.designation}</strong>
//               </p>

//               <p>{trainer.experience}</p>

//               <p>{trainer.specialization}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Trainers;



import { useEffect, useState } from "react";
import { api } from "../services/api";
import TrainerCard from "../components/TrainerCard";

function Trainers() {
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const data = await api.getTrainers();
        setTrainers(data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
        setError("Failed to load trainers");
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  const handleViewDetails = (trainer) => {
    setSelectedTrainer(trainer);
  };

  const handleCloseModal = () => {
    setSelectedTrainer(null);
  };

  if (loading) {
    return (
      <section className="section trainers-section">
        <div className="section-heading">
          <span>OUR TRAINERS</span>
          <h2>Meet Our Trainers</h2>
          <p>Loading trainers...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section trainers-section">
        <div className="section-heading">
          <span>OUR TRAINERS</span>
          <h2>Meet Our Trainers</h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section trainers-section">
        <div className="section-heading">
          <span>OUR TRAINERS</span>

          <h2>Meet Our Trainers</h2>

          <p>
            Learn from experienced trainers and industry professionals.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </section>

      {selectedTrainer && (
        <div
          className="modal-overlay"
          onClick={handleCloseModal}
        >
          <div
            className="modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-button"
              onClick={handleCloseModal}
            >
              ×
            </button>

            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
            />

            <div className="modal-body">
              <h2>{selectedTrainer.name}</h2>

              <p>
                {selectedTrainer.designation}
              </p>

              <div className="modal-info">
                <div>
                  <strong>Experience</strong>
                  <span>{selectedTrainer.experience}</span>
                </div>

                <div>
                  <strong>Specialization</strong>
                  <span>{selectedTrainer.specialization}</span>
                </div>
              </div>

              <p>
                Our trainers bring practical industry experience and
                professional knowledge to help students build strong
                technical skills and career-ready expertise.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Trainers;