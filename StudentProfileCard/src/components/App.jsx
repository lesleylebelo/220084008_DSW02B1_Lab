import { useState, useEffect } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    fullName: "Lesley Lebelo",
    studentNumber: "220084008",
    qualification: "Business Information Technology",
  });

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  useEffect(() => {
    console.log("Your profile is liked");
  }, [likes]);

  return (
    <div className="app">
      <Header />

      <StudentCard

        fullName = {student.fullName}
        studentNumber = {student.studentNumber}
        qualification = {student.qualification}
        likes = {likes}
        onLike = {handleLike}
      />

      <Footer />
    </div>
  );
}

export default App;