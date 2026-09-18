function TrainerCard({ trainer ,onViewDetails}) {
  return (
    <div className="trainer-card">

      <img
        src={trainer.image}
        alt={trainer.name}
      />

      <div className="trainer-content">

        <h3>{trainer.name}</h3>

        <p className="trainer-designation">
          {trainer.designation}
        </p>

        {/* <p>
          {trainer.experience}
        </p>

        <span>
          {trainer.specialization}
        </span> */}
        <button
          className="primary-button trainer-button"
          onClick={() => onViewDetails(trainer)}
        >
          View Profile
         </button>

      </div>

    </div>
  );
}

export default TrainerCard;