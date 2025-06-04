// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FiLogOut } from "react-icons/fi";
// import axios from "axios";

// const API_BASE = "https://full-stack-backend-ptu4.onrender.com/api/students";

// const Profile = () => {
//   const { id } = useParams();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/${id}`)
//       .then((res) => setStudent(res.data))
//       .catch((error) => console.error("Failed to fetch student:", error));
//   }, [id]);

//   const handleLogout = () => {
//     localStorage.removeItem("student");
//     window.location.href = "/";
//   };

//   if (!student) {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="p-6 font-sans max-w-md mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Welcome {student.studentName}</h2>

//       <div className="space-y-2 text-gray-800">
//         <p><strong>Age:</strong> {student.age}</p>
//         <p><strong>Gender:</strong> {student.gender}</p>
//         <p><strong>Roll No:</strong> {student.rollNo}</p>
//       </div>

//       {student.image ? (
//         <img
//           src={`https://full-stack-backend-ptu4.onrender.com/uploads/${student.image}`}
//           alt={student.studentName}
//           width="200"
//           className="rounded-lg mt-4"
//         />
//       ) : (
//         <p className="text-gray-500 mt-4">No profile image available.</p>
//       )}

//       <button
//         className="btn btn-outline btn-error w-full flex items-center justify-center gap-2 mt-6"
//         onClick={handleLogout}
//       >
//         <FiLogOut className="w-5 h-5" />
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Profile;


import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import axios from "axios";

const API_BASE = "https://full-stack-backend-ptu4.onrender.com/api/students";

const Profile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_BASE}/${id}`)
      .then((res) => setStudent(res.data))
      .catch((error) => console.error("Failed to fetch student:", error));
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("student");
    window.location.href = "/";
  };

  if (!student) {
    return <p className="text-center mt-10 text-lg text-gray-600">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg font-sans">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Welcome, {student.studentName}
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-semibold">Age:</span> {student.age}
        </p>
        <p>
          <span className="font-semibold">Gender:</span> {student.gender}
        </p>
        <p>
          <span className="font-semibold">Roll No:</span> {student.rollNo}
        </p>
      </div>

      {student.image ? (
        <img
          src={`https://full-stack-backend-ptu4.onrender.com/uploads/${student.image}`}
          alt={student.studentName}
          className="w-48 h-48 object-cover rounded-full mx-auto mt-6 border border-gray-300 shadow-md"
        />
      ) : (
        <p className="text-gray-500 mt-4 text-center">No profile image available.</p>
      )}

      <button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 mt-6 px-4 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
      >
        <FiLogOut className="w-5 h-5" />
        Logout
      </button>
    </div>
  );
};

export default Profile;
