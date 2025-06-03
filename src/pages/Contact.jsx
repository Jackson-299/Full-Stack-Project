import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";



// This component displays contact information



const Contact = () => {
  useParams(); // Assuming you might want to use the id i want to display contact info for a specific student

  // You can fetch or use the id as needed, but for now, we'll just display static contact info
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


  // Displaying contact information




  return (
    <>
      <div className="p-6 font-sans max-w-md mx-auto">
      
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p><strong>Name:</strong> Jackson J</p>
        <p><strong>Role:</strong> Full Stack Developer</p>
        <p><strong>Email:</strong>
          <a href="mailto:havocjack2942002@gmail.com">havocjack2942002@gmail.com</a>
        </p>
      </div>

      <button
        className="btn btn-outline btn-error w-full flex items-center justify-center gap-2 mt-6"
        onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}
      >
      Back to Home
      </button>
    </>
  )
}

export default Contact
