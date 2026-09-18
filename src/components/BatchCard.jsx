function BatchCard({ batch, onEnquire}) {
  return (
    <div className="batch-card">

      <span className="batch-mode">
        {batch.mode}
      </span>

      <h3>
        {batch.course}
      </h3>

      <p>
        👨‍🏫 {batch.trainer}
      </p>

      <p>
        📅 {batch.startDate}
      </p>

      <p>
        🕐 {batch.timing}
      </p>

      <div className="batch-footer">
        <span>
          {batch.seats} seats available
        </span>
        <button
          onClick={() => onEnquire(batch)}
        >
          Enquire

        </button>

        
      </div>

    </div>
  );
}

export default BatchCard;