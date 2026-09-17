function TrainerCard({ trainer }) {
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

        <p>
          {trainer.experience}
        </p>

        <span>
          {trainer.specialization}
        </span>

      </div>

    </div>
  );
}

export default TrainerCard;