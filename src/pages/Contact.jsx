// import React, { useEffect, useState } from 'react'
// import { useParams } from "react-router-dom";



// // This component displays contact information



// const Contact = () => {
//   useParams(); // Assuming you might want to use the id i want to display contact info for a specific student

//   // You can fetch or use the id as needed, but for now, we'll just display static contact info
//   const [contactInfo, setContactInfo] = useState(null);
//   useEffect(() => {
//     // Simulating fetching contact info
//     setContactInfo({
//       name: "Jackson J",
//       role: "Full Stack Developer",
//       email: "havocjack2942002@gmail.com",
//     });
//   }, []);

//   if (!contactInfo) return <p className="text-center mt-10">Loading...</p>;


//   // Displaying contact information




//   return (
//     <>
//       <div className="p-6 font-sans max-w-md mx-auto">
      
//         <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
//         <p><strong>Name:</strong> Jackson J</p>
//         <p><strong>Role:</strong> Full Stack Developer</p>
//         <p><strong>Email:</strong>
//           <a href="mailto:havocjack2942002@gmail.com">havocjack2942002@gmail.com</a>
//         </p>
//       </div>

//       <button
//         className="btn btn-outline btn-error w-full flex items-center justify-center gap-2 mt-6"
//         onClick={() => {
//           localStorage.removeItem("user");
//           window.location.href = "/";
//         }}
//       >
//       Back to Home
//       </button>
//     </>
//   )
// }

// export default Contact



import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Contact = () => {
  useParams(); // This will be useful if later you want to fetch contact info dynamically

  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    // Simulating fetching contact info
    setContactInfo({
      name: "Jackson J",
      role: "Full Stack Developer",
      email: "havocjack2942002@gmail.com",
    });
  }, []);

  if (!contactInfo) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg font-sans space-y-4">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Contact Information
      </h2>

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Name:</strong> {contactInfo.name}
        </p>
        <p>
          <strong>Role:</strong> {contactInfo.role}
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-blue-600 hover:underline"
          >
            {contactInfo.email}
          </a>
        </p>
      </div>

      <button
        className="btn btn-outline btn-error w-full mt-6"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Contact;
