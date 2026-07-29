function StudentCard({
  fullName,
  studentNumber,
  qualification,
  likes,
  onLike,
}) {

  return (

    <div className="card">
      <img
        src="/profile.jpg"
        className="picture"
      />

      <h2>{fullName}</h2>

      <p>
        Student Number: {studentNumber}
      </p>

      <p>
        Qualification:{qualification}
      </p>

      <button onClick={onLike}>
        Like Profile 
      </button>

      <h3>Likes: {likes}</h3>
    </div>
  );
}

export default StudentCard;