function StudentCard({

    fullName,
    studentNumber,
    qualification,
    likes,
    onLike,

}) {

    return (

        <div className = "card">

            <img 
            
                src = "profile.jpeg"
                alt = "Profile Picture"
                className = "profile-picture"
            
            />

            <h2> {fullName} </h2>

            <p>
                <strong>Student Number: </strong> {studentNumber}
            </p>

            <p>
                <strong>Qualification: </strong> {qualification}
            </p>

            <button onClick = {onLike}>
                Like Profile
            </button>

            <h3>Like: {likes}</h3>

        </div>
    );
}

export default StudentCard;